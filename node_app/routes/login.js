"use strict";
/**
 *  @author: RainASdM
 *  @date: 2020-09-19 02:05
 *  @description  登录模块路由
 */
Object.defineProperty(exports, "__esModule", { value: true });
var login_routes = function (app) {
    //用户是否已登录
    app.get("/isLogin", function (req, res) {
        res.send(true);
    });
    //用户登录
    app.post("/login", function (req, res) {
        var result = {
            status: "success",
            name: "username",
            obj: function () { }
        };
        res.status(200)
            .json(result);
        console.log(result);
    });
    //用户退出登录
    app.get("/logOut");
};
exports.default = login_routes;
