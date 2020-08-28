const express = require("express");
const cors = require("cors");

const app = express();

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

app.get("/",(req: any, res: { send: (arg0: string) => void; }) => {
    res.send("index");
    console.info("index");
});

app.get("/asd",(req: any, res: { send: (arg0: string) => void; }) => {
    res.send("hallow world!");
    console.info("asd");
});

app.get("/isLogin",(req: object, res: {send: (result: boolean) => void}) => {
    res.send(true)
})

app.post("/login",(req: any, res: {send: () => void;}) => {
    // if (req)


    res.send()
})

app.get("/signOut")

app.listen(4000,() => {
    console.log("后台服务已启动！");
});