"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("./axios"));
function $Http(params, method = 'GET') {
    return __awaiter(this, void 0, void 0, function* () {
        const { url, params: queryParams } = params; // 解构参数对象
        try {
            const response = yield (0, axios_1.default)({
                url: url,
                method: method,
                params: queryParams
            });
            // 返回响应数据
            return response.data;
        }
        catch (error) {
            throw error; // 可以选择抛出错误供上层处理
        }
    });
}
exports.default = $Http;
