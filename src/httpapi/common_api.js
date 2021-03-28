import $http from './axios_base.js'

//获取用户信息
//重点：http_getUserInfo这个名字是唯一的，就是在页面中引用时也必须用这个名字
//例如：import {http_getUserInfo} from '../http/api'
export const http_getUserInfo = (data) => {
    return $http.request({
        method: "POST",
        url: '/api/User/GetUserInfo',
        data: data,  //相当于请求体body
        //params: data,  //get请求传递参数
    })
}

//登陆信息
// export const Login = (data) => {
//     return $http.request({
//         method: "POST",
//         url: '/api/User/Login',
//         data: data,  //相当于请求体body
//         //params: data,  //get请求传递参数
//     })
// }

