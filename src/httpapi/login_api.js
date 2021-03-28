import $http from './axios_base.js'

//登陆信息
export const Login = (data) => {
    return $http.request({
        method: "POST",
        url: '/api/User/Login',
        data: data,  //相当于请求体body
        //params: data,  //get请求传递参数
    })
}