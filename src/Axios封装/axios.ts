import axios from 'axios';

// 创建一个新的 Axios 实例
const AxiosInstance = axios.create({
    // baseURL: 'http://api.example.com', // 设置基本的 URL
    timeout: 10000, // 设置超时时间为10秒
});

// 请求拦截器
AxiosInstance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 可以在此处设置请求头等
        // console.log('请求拦截器', config);
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        // console.error('请求拦截器错误', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
AxiosInstance.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        // console.log('响应拦截器', response);
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        // console.error('响应拦截器错误', error);
        const { response } = error;
        if (response) {
            // 响应已经收到，但是状态码不在 2xx 范围内
            switch (response.status) {
                case 400:
                    console.error('请求错误 (400)');
                    break;
                case 401:
                    console.error('未授权 (401)');
                    break;
                case 403:
                    console.error('禁止访问 (403)');
                    break;
                case 404:
                    console.error('资源不存在 (404)');
                    break;
                case 500:
                    console.error('服务器错误 (500)');
                    break;
                // 其他状态码处理
                default:
                    console.error(`发生错误: ${response.status}`);
            }
        } else {
            // 请求没有收到响应
            console.error('请求失败: 未收到响应');
        }
        return Promise.reject(error);
    }
);

// 导出封装后的 Axios 实例
export default AxiosInstance;
