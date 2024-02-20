"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("@/Axios\u5C01\u88C5/request"));
(0, request_1.default)({
    url: "https://api.mxycn.cn/api/mryy.php",
}, "get").then(data => {
    // 在这里处理返回的数据
    console.log("成功获取到的数据:", data);
});
