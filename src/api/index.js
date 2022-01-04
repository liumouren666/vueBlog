import axios from 'axios'
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API // url = base url + request url    timeout: 1000,
});
// 添加请求拦截器
service.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    return config;
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
service.interceptors.response.use(response => {
    if (response.data && response.data.errno === 0) {
        return Promise.resolve(response.data)
    } else {
        //  处理 由后端抛出的错误
        console.log(JSON.stringify(response.data))
        return Promise.reject(response)
    }
}, async error => {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default service
