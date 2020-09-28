"use strict";
/**
 *  @author: RainASdM
 *  @date: 2020-09-19 02:05
 *  @description  应用启动主文件
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//依赖包
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
//路由主方法
var router_1 = __importDefault(require("../public/router"));
var login_1 = __importDefault(require("../routes/login"));
//初始化服务
var app = express_1.default();
//启用跨域请求CORS模块
app.use(cors_1.default());
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
//启动路由
router_1.default(app);
login_1.default(app);
app.get("/", function (req, res) {
    res.send("index");
    console.info("index");
});
app.get("/asd", function (req, res) {
    res.send("hallow world!");
    console.info("asd");
});
app.listen(4000, function () {
    console.log("port:4000  --后台服务已启动！");
});
