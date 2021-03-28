import axios from "axios";

//创建一个axios实例
//这里可以进行公共的信息设置
const instance = axios.create({
    baseURL: 'http://localhost:5000'
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'},
    // headers: { Authorization: "Bearer xxxxxxx" },
    // withCredentials: false, //表示跨域请求时是否需要使用凭证 默认false
    // responseType: "json", // default
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //config.headers.token="123123";
    //console.log('config:' + config)

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data=response.data;
    //console.log('response:' + data)

    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

//最后输出
export default instance