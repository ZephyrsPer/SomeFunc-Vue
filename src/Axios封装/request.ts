import AxiosInstance from "./axios";

interface Params {
    url: string;
    params?: Record<string, any>;
}

export default async function $Http(params: Params, method: string = 'GET') {
    const { url, params: queryParams } = params; // 解构参数对象
    try {
        const response = await AxiosInstance({
            url: url,
            method: method,
            params: queryParams
        });
        // 返回响应数据
        return response.data;
    } catch (error) {
        throw error; // 可以选择抛出错误供上层处理
    }
}
