/**
 *  @author: RainASdM
 *  @date: 2020-05-22 14:12
 *  @description  组件引用方法集
 */

//引入依赖库
import Request from "../../../../../utils/Request";

//接口类型
interface logIn_interface {
    useName: string,
    password: string,
    obj: object
}

interface logIn_Callback_interface {

}

interface logOut_Callback_interface {
    result: object;
}

/**
 * 获取登录当前状态
 */
const getLoginStatus : () => {} = () => {


    return {
        status: false,
        value: {}
    };
}

/**
 * 登录请求
 */
const logIn = ({useName, password, obj} : logIn_interface) => {
    Request.POST({
        params: {useName, password, obj},
        path: "/login",
        callback: (result: object) => {
            logIn_Callback(result)
        }
    });
}

/**
 * 登录回调方法
 * @param result
 */
const logIn_Callback = (result : logIn_Callback_interface) => {

}


const logOut = () => {
    Request.GET({
        path: "/signOut",
        callback: (result: logOut_Callback_interface) => {
            logOut_Callback(result);
        }
    })
}

/**
 * 退出登录回调方法
 * @param result
 */
const logOut_Callback = (result : logOut_Callback_interface) => {
    console.log(result);
}


export {
    getLoginStatus,
    logIn,
    logIn_Callback,
    logOut,
    logOut_Callback
}