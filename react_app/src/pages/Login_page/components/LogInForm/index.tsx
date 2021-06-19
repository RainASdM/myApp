/**
 *  @author: RainASdM
 *  @date: 2021-06-18 04:21
 *  @description
 */

//依赖库
import React from "react";

//依赖方法


//依赖组件
import withForm from "./withForm";

//静态类型
import {props_interface} from "./types"

//子组件

const LogInForm: React.FC<props_interface> = (props: props_interface) => {

    const {refs} = props;

    return (
        <section>
            <h3>登录</h3>
            <div>
                <label>用户名：</label>
                <input type="text" ref={refs}/>
            </div>


            <div>
                <label>密码：</label>
                <input type="password"/>
            </div>

            {/*<label>验证码：</label>
                <input/>*/}

            <span>注册</span>
            <span>找回密码</span>

            <span className="submit">登录</span>
        </section>
    )
}

export default withForm(LogInForm);