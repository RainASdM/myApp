/**
 *  @author: RainASdM
 *  @date: 2020-09-19 02:05
 *  @description  应用启动主文件
 */

//依赖包
import express, {Request, Response} from "express";
import cors from "cors";

//路由主方法
import router from "../public/router";

import login_routes from "../routes/login";

//初始化服务
const app = express();

//启用跨域请求CORS模块
app.use(cors());

//设置允许跨域访问该服务.
app.use('*',(req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');

    console.log(`${req.ip}访问：${req.baseURL}`);

    next();
});

//启动路由
router(app);

login_routes(app);

app.get("/",(req: Request, res: Response) => {
    res.send("index");
    console.info("index");
});

app.get("/asd",(req: Request, res: Response) => {
    res.send("hallow world!");
    console.info("asd");
});

//获取登录状态
app.get("/app/isLogin",() => {

})

//登录
app.post("/app/login",() => {

});

//退出登录
app.get("/app/logOut", () => {

})

app.listen(4000,() => {
    console.log("port:4000  --后台服务已启动！");
});