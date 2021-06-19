/**
 *  @author: RainASdM
 *  @date: 2020-09-29 06:47
 *  @description  登录页组件
 */

//依赖库
import React from "react";

//子组件
import LogInForm from "./components/LogInForm"


const Login_page = () => {

    const ref = React.createRef();

    return (
        <main>
            <div className="login"/>

            <LogInForm refs={ref}/>
        </main>
    )

}

export default Login_page;