/**
 *  @author: RainASdM
 *  @date: 2020-09-29 01:04
 *  @description  全局头部组件
 */

//基本库
import React, {Component} from "react";

//静态类型
import {props, state} from "./types"

//配置文件
import config from "./lib/config";

//样式文件
import "./style.less"

//子组件
import Nav_loginStatus from "./components/Nav_loginStatus";
import {Context} from "../Context/components/Main_context"
import BreadCrumbs from "../BreadCrumbs";


class Header extends Component <props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            componentName: "index",
            showLogo: true
        }
    }


    render() {
        const {showLogo} = this.state;

        return (
            <header id="header">
                {/*导航栏*/}
                <nav id="nav">
                    {/*logo*/}
                    {showLogo && <span className="App-logo"/>}
                    <span className={config.Icon.className}/>

                    {/*导航栏登录/个人中心*/}
                    <Nav_loginStatus/>

                    {/*主题切换*/}
                    <Context.Consumer>
                        {
                            ({context, changeContexts}) =>
                                <span className="theme" onClick={() => changeContexts([{key: "theme", value: "dark"}])}>
                                {context.theme}
                            </span>
                        }
                    </Context.Consumer>
                </nav>

                {/*面包屑导航*/}
                <BreadCrumbs/>
            </header>
        )
    }

}

export default Header;