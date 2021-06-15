/**
 *  @author: RainASdM
 *  @date: 2020-09-29 06:23
 *  @description  应用主路由组件
 */

//基本库
import React, {Component, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "antd/dist/antd.css"

//子组件
import ErrorCatch from "./components/ErrorCatch"
import App from "./App";
import Header from "./components/Header";

const Login_page = React.lazy(() => import("./pages/Login_page"));


class MyRouter extends Component {

    render() {


        return (
            <Router>
                {/*异常错误捕获弹窗*/}
                <ErrorCatch>

                    {/*头部*/}
                    <Header show={true}/>

                    {/*main*/}
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>

                            {/*首页*/}
                            <Route path={"/"} component={App} exact/>

                            {/*登录页*/}
                            <Route path={"/login"} component={Login_page} exact/>

                        </Switch>
                    </Suspense>

                </ErrorCatch>
            </Router>
        )

    }
}

export default MyRouter;