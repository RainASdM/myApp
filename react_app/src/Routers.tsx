/**
 *  @author: RainASdM
 *  @date: 2020-09-29 06:23
 *  @description  应用主路由组件
 */

//基本库
import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "antd/dist/antd.css"

//子组件
import App from "./App";
import Login_page from "./pages/Login_page";
import Header from "./components/Header/Header";

class Routers extends Component {

    render() {

        return (
            <Router>
                {/*头部*/}
                <Header/>
                {/*main*/}
                <Switch>
                    {/*首页*/}
                    <Route path={"/"} component={App} exact/>
                    {/*登录页*/}
                    <Route path={"/login"} component={Login_page} exact/>
                </Switch>
            </Router>
        )

    }
}

export default Routers;