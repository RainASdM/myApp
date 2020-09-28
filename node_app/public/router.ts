/**
 *  @author: RainASdM
 *  @date: 2020-09-20 04:29
 *  @description  路由主方法
 */

//依赖包
import {Express} from "express"

//子路由
import login_routes from "../routes/login";

const router = (app: Express) => {

    //登录模块路由
    login_routes(app);

}

export default router