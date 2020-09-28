/**
 *  @author: RainASdM
 *  @date: 2020-09-29 01:04
 *  @description
 */

//基本库
import React, {Component} from "react";

//配置文件
import config from "./lib/config";

//样式文件
import "./style.less"

//子组件
import Nav_loginStatus from "./components/Nav_loginStatus";

//接口
interface props {
    show: boolean
}

class Header extends Component {
    constructor(props: props) {
        super(props);
    }

    render() {
        return (
            <header>
                <span className={config.Icon.className}/>
                <Nav_loginStatus/>
            </header>
        )
    }

}

export default Header;