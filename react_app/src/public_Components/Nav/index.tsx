/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:43
 *  @description  全局导航栏组件
 */

//引入依赖库
import React, {useState} from "react";


//组件依赖方法集
import {getLoginStatus, singOut, signOut_Callback} from "./lib/functions"

const Nav = () => {

    //登录状态
    const [loginStatus, setLoginStatus] = useState<object>(
        {
            status: false,
            value: {}
        });
    //初始化登录状态
    const logIngInit = getLoginStatus();
    setLoginStatus(logIngInit);

    return (
        <nav>
            {
                loginStatus ?
                    <ul>
                        <li onClick={() => {

                        }}>登录
                        </li>
                    </ul>

                    :

                    <ul>
                        <li>个人中心</li>
                        <li
                            onClick={() => {
                               singOut();
                            }}
                        >退出登录</li>
                    </ul>
            }
        </nav>
    )
}

export default Nav;