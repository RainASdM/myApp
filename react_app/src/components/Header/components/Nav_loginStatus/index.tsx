/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:43
 *  @description  导航栏登录/个人中心
 */

//引入依赖库
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

//样式
import "./style.less"


//组件依赖方法集
import {
    getLoginStatus,
    logOut
} from "./lib/functions"


const Nav_loginStatus = () => {

    //登录状态
    const [loginStatus, setLoginStatus] = useState<object>(
        {
            status: false,
            value: {}
        });

    useEffect(() => {
        setLoginStatus(getLoginStatus)
    }, []);


    return (
        <ul className="nav-login">
            {
                loginStatus ?

                    <li>
                        <Link to="/login">登录</Link>
                    </li>

                    :

                    <>
                        <li>
                            <Link to="/">个人中心</Link>
                        </li>

                        <li onClick={() => {
                                logOut();
                            }}
                        >
                            退出登录
                        </li>
                    </>
            }
        </ul>
    )
}

export default Nav_loginStatus;