import { ui } from "../ui/layaMaxUI";

export default class MapScene extends ui.test.MapSceneUI {
    selectState: number = 0;
    isMouseDown: boolean = false
    lastX: number
    lastY: number
    imgW: number
    imgH: number
    stageW: number
    stageH: number
    pathPoints: number[] = []
    drawSp: Laya.Sprite

    onEnable() {
        for (let i = 0; i < this.box_build.numChildren; ++i) {
            let build = this.box_build.getChildAt(i) as Laya.Label;
            build.on(Laya.Event.CLICK, this, this.buildOnclick, [i]);
        }
        // console.log(this.box_build.numChildren)

        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown)
        Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
        Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp)
        
        this.imgW = this.img_map.width;
        this.imgH = this.img_map.height;
        this.stageW = Laya.stage.width;
        this.stageH = Laya.stage.height;

        this.drawSp = this.img_map.addChild(new Laya.Sprite) as Laya.Sprite;
        this.drawSp.zOrder = 1000

        this.test()
        this.test2(this.pointArr, 0, 5)
    }

    onMouseDown(e: Laya.Event) {
        this.isMouseDown = true
    }

    onMouseMove(e: Laya.Event) {
        if (!this.isMouseDown) return;
        // let imgx = this.img_map.x;
        // let imgy = this.img_map.y;
        // if (imgx >= this.imgW/2) return
        // if (imgx <= this.stageW - this.imgW/2) return
        // if (imgy <= this.imgH/2) return
        // if (imgy >= this.stageH - this.imgH/2) return
        let sx = e.stageX
        let sy = e.stageY
        if (this.lastX == void(0)) {
            this.lastX = sx
            this.lastY = sy
            return
        }
        let dx = sx - this.lastX;
        let dy = sy - this.lastY;

        this.img_map.pos(this.img_map.x + dx, this.img_map.y + dy)

        this.lastX = sx;
        this.lastY = sy;
    }

    onMouseUp(e: Laya.Event) {
        this.isMouseDown = false
        this.lastX = this.lastY = null
    }

    buildOnclick(index: number) {
        this.getNearPos(index)
        if (this.selectState == 0) {
            // 选择起点
            this.selectState = 1
        } else {
            // 选择终点
            this.selectState = 0
        }
        let build = this.box_build.getChildAt(index) as Laya.Label;
        build.alpha = 0.9
        this.pathPoints.push(build.x, build.y)
        this.drawLines()
    }

    getNearPos(index: number) {
        let build = this.box_build.getChildAt(index) as Laya.Label;
        let bx = build.x
        let by = build.y

        let mindis = 10000000
        let minpindex = 0
        for (let i = 0; i < this.box_point.numChildren; ++i) {
            let point = this.box_point.getChildAt(i) as Laya.Label;
            let px = point.x
            let py = point.y

            let dis = (py - by) * (py - by) + (px - bx) * (px - bx)
            if (dis < mindis) {
                mindis = dis
                minpindex = i
            }
        }

        let point = this.box_point.getChildAt(minpindex) as Laya.Label;
        point.alpha = 0.9
        this.pathPoints.push(point.x, point.y)
    }

    drawLines() {
        this.drawSp.graphics.clear()
        this.drawSp.graphics.drawLines(0, 0, this.pathPoints, "#ff0000", 4)
    }

    pointArr = []
    test() {
        let pointdata = [
            "2_2,4_1,5_1", //1
            "1_2,3_4,18_6", //2
            "2_4,6_2", //3
            "1_2,5_2,10_3", //4
            "1_2,4_2,11_3", //5
            "3_2,12_3", //6
            "13_2", //7
            "15_2", //8
            "10_4", //9
            "9_4,4_3,16_2", //10
            "5_3,17_2", //11
            "6_3,13_3,20_3", //12
            "12_3,7_2,14_1", //13
            "13_1,15_1", //14
            "14_1,8_2", //15
            "10_2,17_1", //16
            "16_1,18_2", //17
            "17_2,19_1", //18
            "18_1,22_1,20_3", //19
            "19_3,12_3,21_3,24_3", //20
            "20_3", //21
            "19_1,23_1", //22
            "22_1", // 23
            "20_3" //24
        ]

        let pointArr = []

        for (let i = 0; i < pointdata.length; ++i) {
            pointArr[i] = new Array(24).fill(Infinity)
            pointArr[i][i] = 0
            let datai = pointdata[i] as string;
            let dataarr = datai.split(",");
            for (let j = 0; j < dataarr.length; ++j) {
                let dataj = dataarr[j] as string
                let datajarr = dataj.split("_")
                let index = +datajarr[0] - 1
                let value = +datajarr[1]
                pointArr[i][index] = value
            }
        }

        this.pointArr = pointArr
    }

    test2(matrix, start = 0, end = 0) {
        const rows = matrix.length,//rows和cols一样，其实就是顶点个数
        cols = matrix[0].length;
    
        if(rows !== cols || start >= rows) return new Error("邻接矩阵错误或者源点错误");
        
        //初始化distance
        const distance = new Array(rows).fill(Infinity);
        distance[start] = 0;
        
        for(let i = 0; i < rows; i++) {
            //达到不了的顶点不能作为中转跳点
            if(distance[i] < Infinity) {
                for(let j = 0; j < cols; j++) {
                    //比如通过比较distance[i] + matrix[i][j]和distance[j]的大小来决定是否更新distance[j]。
                    if(matrix[i][j] + distance[i] < distance[j]) {
                        distance[j] = matrix[i][j] + distance[i];
                        if (j == end) console.log("xxxxx", j)
                    }
                }
                // console.log(distance);
            }
        }
        console.log(distance);
        return distance;
    }
}