"use strict";
var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());
//设置允许跨域访问该服务.
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    console.log(req.ip + "\u8BBF\u95EE\uFF1A" + req.baseURL);
    next();
});
app.get("/", function (req, res) {
    res.send("index");
    console.info("index");
});
app.get("/asd", function (req, res) {
    res.send("hallow world!");
    console.info("asd");
});
app.get("/isLogin", function (req, res) {
    res.send(true);
});
app.post("/login", function (req, res) {
    // if (req)
    res.send();
});
app.get("/signOut");
app.listen(4000, function () {
    console.log("后台服务已启动！");
});
