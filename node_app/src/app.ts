const express = require("express");

const app = express();

app.get("/hallow world",(req: any, res: { send: (arg0: string) => void; }) => {
    res.send("hallow world!");
});

app.listen(4000,() => {
    console.log("后台服务已启动！");
});