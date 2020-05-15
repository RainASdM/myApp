/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:47
 *  @description  全局登录模块
 */

//引入依赖库
import React, {useState} from "react";

//公共组件
import Request from "../../utils/Request";

//函数接口数据类型
interface login_params {
    params: object
}
interface isLogin {

}

class Login {
    instance: any;
    loginStatus: boolean;
    path: string;
    isLogin: Promise<unknown>;

    constructor() {
        this.instance = null;
        this.loginStatus = false;
        this.path = "/login"

        this.isLogin = this.isLogin_fun();
    }

    /**
     * 登录接口
     * @param login_params 登录参数
     */
    login(login_params: login_params) {
        return Request.POST({
            path: this.path,
            params: login_params.params,
            callback: () => {}
        })
    }

    isLogin_fun() {
        return Request.GET({
            path: "/isLogin",
            callback: () => {}
        })
    }
}

export default Login;