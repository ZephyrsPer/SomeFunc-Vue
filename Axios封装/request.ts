import AxiosInstance from "./axios";

interface Params {
    url: string;
    params?: Record<string, any>;
}

export default async function $Http(params: Params, method: string = 'GET') {
    const { url, params: queryParams } = params; // 解构参数对象
    try {
        const response = await AxiosInstance({
            method: method,
            url: url,
            params: queryParams
        });
        // 返回响应数据
        return response.data;
    } catch (error) {
        // 如果请求失败，捕获错误并进行处理
        // console.error('请求失败:', error);
        throw error; // 可以选择抛出错误供上层处理
    }
}
