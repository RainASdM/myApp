/**
 *  @author: RainASdM
 *  @date: 2020-09-29 06:47
 *  @description  登录页组件
 */

import React from "react";
import {Link} from "react-router-dom";

const Login_page = () => {

    return (
        <>
            <button>回首页</button>
            <li>
                <Link to='/'>返回首页</Link>
            </li>
        </>
    )

}

export default Login_page;