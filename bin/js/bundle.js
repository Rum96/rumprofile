(function () {
    'use strict';

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
        }
    }
    GameConfig.width = 640;
    GameConfig.height = 1136;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "vertical";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "test/MapScene.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var test;
        (function (test) {
            class MapSceneUI extends Laya.Scene {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren();
                    this.createView(MapSceneUI.uiView);
                }
            }
            MapSceneUI.uiView = { "type": "Scene", "props": { "width": 720, "height": 1280 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 640, "x": 360, "var": "img_map", "skin": "img/map.jpg", "anchorY": 0.5, "anchorX": 0.5 }, "compId": 3, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 2684, "var": "box_build", "height": 2043 }, "compId": 56, "child": [{ "type": "Label", "props": { "y": 1429, "x": 685, "width": 186, "stateNum": 1, "name": "label_", "label": "label", "height": 160, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 4 }, { "type": "Label", "props": { "y": 1069, "x": 755, "width": 128, "stateNum": 1, "name": "label_", "label": "label", "height": 160, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 5 }, { "type": "Label", "props": { "y": 1647, "x": 697, "width": 98, "stateNum": 1, "name": "label_", "label": "label", "height": 160, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 6 }, { "type": "Label", "props": { "y": 989, "x": 1109, "width": 98, "stateNum": 1, "name": "label_", "label": "label", "height": 160, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 7 }, { "type": "Label", "props": { "y": 1628, "x": 973, "width": 185, "stateNum": 1, "name": "label_", "label": "label", "height": 99, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 8 }, { "type": "Label", "props": { "y": 1384, "x": 1131, "width": 124, "stateNum": 1, "name": "label_", "label": "label", "height": 68, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 9 }, { "type": "Label", "props": { "y": 1459, "x": 1131, "width": 124, "stateNum": 1, "name": "label_", "label": "label", "height": 52, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 10 }, { "type": "Label", "props": { "y": 1567, "x": 1158, "width": 124, "stateNum": 1, "name": "label_", "label": "label", "height": 68, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 11 }, { "type": "Label", "props": { "y": 1555, "x": 1297, "width": 124, "stateNum": 1, "name": "label_", "label": "label", "height": 68, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 12 }, { "type": "Label", "props": { "y": 1429, "x": 1297, "width": 124, "stateNum": 1, "name": "label_", "label": "label", "height": 52, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 13 }, { "type": "Label", "props": { "y": 1330, "x": 1286, "width": 101, "stateNum": 1, "name": "label_", "label": "label", "height": 79, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 14 }, { "type": "Label", "props": { "y": 1125, "x": 1278, "width": 89, "stateNum": 1, "name": "label_", "label": "label", "height": 284, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 15 }, { "type": "Label", "props": { "y": 998, "x": 1413, "width": 89, "stateNum": 1, "name": "label_", "label": "label", "height": 284, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 16 }, { "type": "Label", "props": { "y": 1538, "x": 1438, "width": 89, "stateNum": 1, "name": "label_", "label": "label", "height": 51, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 17 }, { "type": "Label", "props": { "y": 1356, "x": 1432, "width": 89, "stateNum": 1, "name": "label_", "label": "label", "height": 73, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 18 }, { "type": "Label", "props": { "y": 1240, "x": 1477, "width": 41, "stateNum": 1, "name": "label_", "label": "label", "height": 116, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 19 }, { "type": "Label", "props": { "y": 1396, "x": 1655, "width": 124, "stateNum": 1, "name": "label_", "label": "label", "height": 71, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 20 }, { "type": "Label", "props": { "y": 1396, "x": 1809, "width": 148, "stateNum": 1, "name": "label_", "label": "label", "height": 71, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 21 }, { "type": "Label", "props": { "y": 1108, "x": 1682, "width": 162, "stateNum": 1, "name": "label_", "label": "label", "height": 248, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 22 }, { "type": "Label", "props": { "y": 862, "x": 1689, "width": 208, "stateNum": 1, "name": "label_", "label": "label", "height": 43, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 23 }, { "type": "Label", "props": { "y": 1563, "x": 1785, "width": 172, "stateNum": 1, "name": "label_", "label": "label", "height": 68, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 25 }, { "type": "Label", "props": { "y": 1668, "x": 1615, "width": 98, "stateNum": 1, "name": "label_", "label": "label", "height": 163, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 26 }, { "type": "Label", "props": { "y": 1639, "x": 1788, "width": 178, "stateNum": 1, "name": "label_", "label": "label", "height": 57, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 27 }, { "type": "Label", "props": { "y": 1719, "x": 1790, "width": 186, "stateNum": 1, "name": "label_", "label": "label", "height": 61, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 28 }, { "type": "Label", "props": { "y": 1779, "x": 1749, "width": 260, "stateNum": 1, "name": "label_", "label": "label", "height": 43, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 29 }, { "type": "Label", "props": { "y": 1098, "x": 1805, "width": 37, "stateNum": 1, "name": "label_", "label": "label", "height": 159, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 30 }, { "type": "Label", "props": { "y": 636, "x": 1779, "width": 414, "stateNum": 1, "name": "label_", "label": "label", "height": 272, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 31 }, { "type": "Label", "props": { "y": 1601, "x": 2175, "width": 462, "stateNum": 1, "name": "label_", "label": "label", "height": 160, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 32 }, { "type": "Label", "props": { "y": 1762, "x": 2205, "width": 520, "stateNum": 1, "name": "label_", "label": "label", "height": 90, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 33 }, { "type": "Label", "props": { "y": 1537, "x": 2459, "width": 72, "stateNum": 1, "name": "label_", "label": "label", "height": 337, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 34 }, { "type": "Label", "props": { "y": 1104, "x": 2184, "width": 80, "stateNum": 1, "name": "label_", "label": "label", "height": 171, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 35 }, { "type": "Label", "props": { "y": 1106, "x": 2308, "width": 68, "stateNum": 1, "name": "label_", "label": "label", "height": 163, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 36 }, { "type": "Label", "props": { "y": 1261, "x": 2212, "width": 218, "stateNum": 1, "name": "label_", "label": "label", "height": 37, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 37 }, { "type": "Label", "props": { "y": 1369, "x": 2224, "width": 133, "stateNum": 1, "name": "label_", "label": "label", "height": 80, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 38 }, { "type": "Label", "props": { "y": 929, "x": 2250, "width": 215, "stateNum": 1, "name": "label_", "label": "label", "height": 78, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 39 }, { "type": "Label", "props": { "y": 1055, "x": 2451, "width": 149, "stateNum": 1, "name": "label_", "label": "label", "height": 43, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 40 }, { "type": "Label", "props": { "y": 1151, "x": 2425, "width": 105, "stateNum": 1, "name": "label_", "label": "label", "height": 48, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 41 }, { "type": "Label", "props": { "y": 1071, "x": 2036, "width": 144, "stateNum": 1, "name": "label_", "label": "label", "height": 43, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 42 }, { "type": "Label", "props": { "y": 1149, "x": 2036, "width": 144, "stateNum": 1, "name": "label_", "label": "label", "height": 43, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 43 }, { "type": "Label", "props": { "y": 927, "x": 2021, "width": 144, "stateNum": 1, "name": "label_", "label": "label", "height": 68, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 44 }, { "type": "Label", "props": { "y": 998, "x": 2025, "width": 160, "stateNum": 1, "name": "label_", "label": "label", "height": 38, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 45 }, { "type": "Label", "props": { "y": 856, "x": 2033, "width": 107, "stateNum": 1, "name": "label_", "label": "label", "height": 31, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 46 }, { "type": "Label", "props": { "y": 1538, "x": 1623, "width": 85, "stateNum": 1, "name": "label_", "label": "label", "height": 51, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 47 }, { "type": "Label", "props": { "y": 1779, "x": 1593, "width": 43, "stateNum": 1, "name": "label_", "label": "label", "height": 51, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 48 }, { "type": "Label", "props": { "y": 1344, "x": 2087, "width": 58, "stateNum": 1, "name": "label_", "label": "label", "height": 59, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 49 }, { "type": "Label", "props": { "y": 832, "x": 1257, "width": 58, "stateNum": 1, "name": "label_", "label": "label", "height": 59, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 50 }, { "type": "Label", "props": { "y": 834, "x": 1918, "width": 58, "stateNum": 1, "name": "label_", "label": "label", "height": 59, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 52 }, { "type": "Label", "props": { "y": 1803, "x": 1912, "width": 58, "stateNum": 1, "name": "label_", "label": "label", "height": 59, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 53 }, { "type": "Label", "props": { "y": 1314, "x": 591, "width": 58, "stateNum": 1, "name": "label_", "label": "label", "height": 59, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 54 }, { "type": "Label", "props": { "y": 1098, "x": 1866, "width": 38, "stateNum": 1, "name": "label_", "label": "label", "height": 497, "bgColor": "#ecc7c6", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 55 }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 2684, "var": "box_road", "height": 2043 }, "compId": 70, "child": [{ "type": "Label", "props": { "y": 1294, "x": 631, "width": 554, "stateNum": 1, "name": "label_", "label": "label", "height": 44, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 57 }, { "type": "Label", "props": { "y": 1463, "x": 1227, "width": 1180, "stateNum": 1, "name": "label_", "label": "label", "height": 28, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 58 }, { "type": "Label", "props": { "y": 1195, "x": 1947, "width": 588, "stateNum": 1, "name": "label_", "label": "label", "height": 44, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 59 }, { "type": "Label", "props": { "y": 796, "x": 1287, "width": 1232, "stateNum": 1, "name": "label_", "label": "label", "height": 27, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 60 }, { "type": "Label", "props": { "y": 369, "x": 1251, "width": 32, "stateNum": 1, "name": "label_", "label": "label", "height": 454, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 61 }, { "type": "Label", "props": { "y": 864, "x": 1903, "width": 32, "stateNum": 1, "name": "label_", "label": "label", "height": 906, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 62 }, { "type": "Label", "props": { "y": 1496, "x": 1671, "width": 22, "stateNum": 1, "name": "label_", "label": "label", "height": 254, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 63 }, { "type": "Label", "props": { "y": 932, "x": 1314, "width": 26, "stateNum": 1, "rotation": -5, "name": "label_", "label": "label", "height": 706, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 64 }, { "type": "Label", "props": { "y": 937, "x": 1189, "width": 20, "stateNum": 1, "rotation": -3, "name": "label_", "label": "label", "height": 686, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 65 }, { "type": "Label", "props": { "y": 985, "x": 2115, "width": 22, "stateNum": 1, "name": "label_", "label": "label", "height": 200, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 66 }, { "type": "Label", "props": { "y": 985, "x": 2241, "width": 22, "stateNum": 1, "name": "label_", "label": "label", "height": 204, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 67 }, { "type": "Label", "props": { "y": 985, "x": 2347, "width": 22, "stateNum": 1, "name": "label_", "label": "label", "height": 204, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 68 }, { "type": "Label", "props": { "y": 957, "x": 1947, "width": 160, "stateNum": 1, "name": "label_", "label": "label", "height": 24, "bgColor": "#7ed26f", "alpha": 0.5 }, "compId": 69 }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 2684, "var": "box_point", "height": 2043 }, "compId": 71, "child": [{ "type": "Label", "props": { "y": 1317, "x": 651, "width": 40, "stateNum": 1, "name": "label_9", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 85 }, { "type": "Label", "props": { "y": 958, "x": 1204, "width": 40, "stateNum": 1, "name": "label_4", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 89 }, { "type": "Label", "props": { "y": 1289, "x": 1212, "width": 40, "stateNum": 1, "name": "label_10", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 91 }, { "type": "Label", "props": { "y": 1477, "x": 1224, "width": 40, "stateNum": 1, "name": "label_16", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 93 }, { "type": "Label", "props": { "y": 958, "x": 1330, "width": 40, "stateNum": 1, "name": "label_5", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 95 }, { "type": "Label", "props": { "y": 1257, "x": 1350, "width": 40, "stateNum": 1, "name": "label_11", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 97 }, { "type": "Label", "props": { "y": 1477, "x": 1370, "width": 40, "stateNum": 1, "name": "label_17", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 100 }, { "type": "Label", "props": { "y": 1477, "x": 1547, "width": 40, "stateNum": 1, "name": "label_18", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 103 }, { "type": "Label", "props": { "y": 1477, "x": 1686, "width": 40, "stateNum": 1, "name": "label_19", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 105 }, { "type": "Label", "props": { "y": 1477, "x": 1921, "width": 40, "stateNum": 1, "name": "label_20", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 107 }, { "type": "Label", "props": { "y": 1477, "x": 2167, "width": 40, "stateNum": 1, "name": "label_21", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 108 }, { "type": "Label", "props": { "y": 1724, "x": 1921, "width": 40, "stateNum": 1, "name": "label_24", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 113 }, { "type": "Label", "props": { "y": 1217, "x": 1921, "width": 40, "stateNum": 1, "name": "label_12", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 114 }, { "type": "Label", "props": { "y": 978, "x": 1921, "width": 40, "stateNum": 1, "name": "label_6", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 117 }, { "type": "Label", "props": { "y": 1217, "x": 2127, "width": 40, "stateNum": 1, "name": "label_13", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 121 }, { "type": "Label", "props": { "y": 1217, "x": 2251, "width": 40, "stateNum": 1, "name": "label_14", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 122 }, { "type": "Label", "props": { "y": 1217, "x": 2354, "width": 40, "stateNum": 1, "name": "label_15", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 123 }, { "type": "Label", "props": { "y": 1001.5, "x": 2127, "width": 40, "stateNum": 1, "name": "label_7", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 127 }, { "type": "Label", "props": { "y": 1053, "x": 2354, "width": 40, "stateNum": 1, "name": "label_8", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 130 }, { "type": "Label", "props": { "y": 1605, "x": 1681, "width": 40, "stateNum": 1, "name": "label_22", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 133 }, { "type": "Label", "props": { "y": 1724, "x": 1678, "width": 40, "stateNum": 1, "name": "label_23", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 135 }, { "type": "Label", "props": { "y": 808, "x": 1264, "width": 40, "stateNum": 1, "name": "label_1", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 136 }, { "type": "Label", "props": { "y": 808, "x": 1507, "width": 40, "stateNum": 1, "name": "label_2", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 137 }, { "type": "Label", "props": { "y": 808, "x": 1921, "width": 40, "stateNum": 1, "name": "label_3", "label": "label", "height": 40, "bgColor": "#f80059", "anchorY": 0.5, "anchorX": 0.5, "alpha": 0.5 }, "compId": 138 }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 300, "var": "box_ui", "height": 250, "bgColor": "#3ebde5" }, "compId": 141 }], "loadList": ["img/map.jpg"], "loadList3D": [] };
            test.MapSceneUI = MapSceneUI;
            REG("ui.test.MapSceneUI", MapSceneUI);
        })(test = ui.test || (ui.test = {}));
    })(ui || (ui = {}));

    class MapScene extends ui.test.MapSceneUI {
        constructor() {
            super(...arguments);
            this.selectState = 0;
            this.isMouseDown = false;
            this.pathPoints = [];
            this.pointArr = [];
        }
        onEnable() {
            for (let i = 0; i < this.box_build.numChildren; ++i) {
                let build = this.box_build.getChildAt(i);
                build.on(Laya.Event.CLICK, this, this.buildOnclick, [i]);
            }
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
            Laya.stage.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
            this.imgW = this.img_map.width;
            this.imgH = this.img_map.height;
            this.stageW = Laya.stage.width;
            this.stageH = Laya.stage.height;
            this.drawSp = this.img_map.addChild(new Laya.Sprite);
            this.drawSp.zOrder = 1000;
            this.test();
            this.test2(this.pointArr, 0, 5);
        }
        onMouseDown(e) {
            this.isMouseDown = true;
        }
        onMouseMove(e) {
            if (!this.isMouseDown)
                return;
            let sx = e.stageX;
            let sy = e.stageY;
            if (this.lastX == void (0)) {
                this.lastX = sx;
                this.lastY = sy;
                return;
            }
            let dx = sx - this.lastX;
            let dy = sy - this.lastY;
            this.img_map.pos(this.img_map.x + dx, this.img_map.y + dy);
            this.lastX = sx;
            this.lastY = sy;
        }
        onMouseUp(e) {
            this.isMouseDown = false;
            this.lastX = this.lastY = null;
        }
        buildOnclick(index) {
            this.getNearPos(index);
            if (this.selectState == 0) {
                this.selectState = 1;
            }
            else {
                this.selectState = 0;
            }
            let build = this.box_build.getChildAt(index);
            build.alpha = 0.9;
            this.pathPoints.push(build.x, build.y);
            this.drawLines();
        }
        getNearPos(index) {
            let build = this.box_build.getChildAt(index);
            let bx = build.x;
            let by = build.y;
            let mindis = 10000000;
            let minpindex = 0;
            for (let i = 0; i < this.box_point.numChildren; ++i) {
                let point = this.box_point.getChildAt(i);
                let px = point.x;
                let py = point.y;
                let dis = (py - by) * (py - by) + (px - bx) * (px - bx);
                if (dis < mindis) {
                    mindis = dis;
                    minpindex = i;
                }
            }
            let point = this.box_point.getChildAt(minpindex);
            point.alpha = 0.9;
            this.pathPoints.push(point.x, point.y);
        }
        drawLines() {
            this.drawSp.graphics.clear();
            this.drawSp.graphics.drawLines(0, 0, this.pathPoints, "#ff0000", 4);
        }
        test() {
            let pointdata = [
                "2_2,4_1,5_1",
                "1_2,3_4,18_6",
                "2_4,6_2",
                "1_2,5_2,10_3",
                "1_2,4_2,11_3",
                "3_2,12_3",
                "13_2",
                "15_2",
                "10_4",
                "9_4,4_3,16_2",
                "5_3,17_2",
                "6_3,13_3,20_3",
                "12_3,7_2,14_1",
                "13_1,15_1",
                "14_1,8_2",
                "10_2,17_1",
                "16_1,18_2",
                "17_2,19_1",
                "18_1,22_1,20_3",
                "19_3,12_3,21_3,24_3",
                "20_3",
                "19_1,23_1",
                "22_1",
                "20_3"
            ];
            let pointArr = [];
            for (let i = 0; i < pointdata.length; ++i) {
                pointArr[i] = new Array(24).fill(Infinity);
                pointArr[i][i] = 0;
                let datai = pointdata[i];
                let dataarr = datai.split(",");
                for (let j = 0; j < dataarr.length; ++j) {
                    let dataj = dataarr[j];
                    let datajarr = dataj.split("_");
                    let index = +datajarr[0] - 1;
                    let value = +datajarr[1];
                    pointArr[i][index] = value;
                }
            }
            this.pointArr = pointArr;
        }
        test2(matrix, start = 0, end = 0) {
            const rows = matrix.length, cols = matrix[0].length;
            if (rows !== cols || start >= rows)
                return new Error("邻接矩阵错误或者源点错误");
            const distance = new Array(rows).fill(Infinity);
            distance[start] = 0;
            for (let i = 0; i < rows; i++) {
                if (distance[i] < Infinity) {
                    for (let j = 0; j < cols; j++) {
                        if (matrix[i][j] + distance[i] < distance[j]) {
                            distance[j] = matrix[i][j] + distance[i];
                            if (j == end)
                                console.log("xxxxx", j);
                        }
                    }
                }
            }
            console.log(distance);
            return distance;
        }
    }

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            Laya.stage.addChild(new MapScene);
        }
    }
    new Main();

}());
