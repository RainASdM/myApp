"use strict";
/**
 *  @author: RainASdM
 *  @date: 2020-09-20 04:29
 *  @description  路由主方法
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//子路由
var login_1 = __importDefault(require("../routes/login"));
var router = function (app) {
    //登录模块路由
    login_1.default(app);
};
exports.default = router;
