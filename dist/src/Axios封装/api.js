"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./request"));
function Say() {
    return (0, request_1.default)({
        url: "/api",
    }, "get");
}
exports.default = Say;
