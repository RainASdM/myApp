/**
 *  @author: RainASdM
 *  @date: 2020-09-19 02:05
 *  @description  登录模块路由
 */



import {Express, Request, Response} from "express";

const login_routes = (app: Express) => {
    //用户是否已登录
    app.get("/isLogin",(req: Request, res: Response) => {
        res.send(true)
    })

    //用户登录
    app.post("/login",(req: Request, res: Response) => {

        const result = {
            status: "success",
            name: "username",
            obj: () => {}
        }
        res.status(200)
            .json(result)
        console.log(result);
    })

    //用户退出登录
    app.get("/logOut")
}

export default login_routes
