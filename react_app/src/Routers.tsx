/**
 *  @author: RainASdM
 *  @date: 2020-09-29 06:23
 *  @description  应用主路由组件
 */
import React,{Component} from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import App from "./App";
import Login_page from "./pages/Login_page";

class Routers extends Component{

    render() {

        return (
            <BrowserRouter>
                <Switch>
                    <Route path={"/"} component={App}/>
                    <Route path={"/login"} component={Login_page} exact/>
                </Switch>
            </BrowserRouter>
        )

    }
}

export default Routers;