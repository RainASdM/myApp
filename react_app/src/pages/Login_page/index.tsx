/**
 *  @author: RainASdM
 *  @date: 2020-09-29 06:47
 *  @description  登录页组件
 */

//依赖库
import React from "react";
import {Link} from "react-router-dom";

const Login_page = () => {

    return (
        <main>
            <button>回首页</button>
            <li>
                <Link to='/'>返回首页</Link>
            </li>
        </main>
    )

}

export default Login_page;