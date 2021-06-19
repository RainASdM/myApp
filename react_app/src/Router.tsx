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

//登录页
const Login_page = React.lazy(() => import("./pages/Login_page"));
//注册页
const Registered_page = React.lazy(() => import("./pages/Registered_page"))

const Login = ({match}: { match: { url: string } }) => (
    <>
        {/*登录页*/}
        <Route path={`${match.url}`} component={Login_page} exact/>
        {/*注册页*/}
        <Route path={`${match.url}/registered`} component={Registered_page} exact/>
    </>
)


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
                            <Route path={"/login"} component={Login}/>

                        </Switch>
                    </Suspense>

                </ErrorCatch>
            </Router>
        )

    }
}

export default MyRouter;