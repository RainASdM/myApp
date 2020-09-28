/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:43
 *  @description  全局导航栏组件
 */

//引入依赖库
import React, {useState} from "react";


//组件依赖方法集
import {
    getLoginStatus,
    logIn,
    logIn_Callback,
    logOut,
    logOut_Callback
} from "./lib/functions"


const Nav_loginStatus = () => {

    //登录状态
    const [loginStatus, setLoginStatus] = useState<object>(
        {
            status: false,
            value: {}
        });

    return (
        <nav>
            {
                loginStatus ?
                    <ul>
                        <li onClick={() => {
                            logIn({
                                useName: "asd",
                                password: "5656",
                                obj: new Array()
                            });
                        }}>登录
                        </li>
                    </ul>

                    :

                    <ul>
                        <li>个人中心</li>
                        <li
                            onClick={() => {
                                logOut();
                            }}
                        >退出登录
                        </li>
                    </ul>
            }
        </nav>
    )
}

export default Nav_loginStatus;