/**
 *  @author: RainASdM
 *  @date: 2020-05-22 14:12
 *  @description  组件引用方法集
 */

//引入依赖库
import Request from "../../../utils/Request";

//接口类型
interface logIn_interface {
    useName: string,
    password: string
}

interface logIn_Callback_interface {

}

interface signOut_Callback_interface {
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
 *
 */
const logIn = ({useName, password} : logIn_interface) => {
    Request.POST({
        params: {useName, password},
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


const singOut = () => {
    Request.GET({
        path: "/signOut",
        callback: (result: signOut_Callback_interface) => {
            signOut_Callback(result);
        }
    })
}

/**
 * 退出登录回调方法
 * @param result
 */
const signOut_Callback = (result : signOut_Callback_interface) => {
    console.log(result);
}


export {
    getLoginStatus,
    logIn,
    logIn_Callback,
    singOut,
    signOut_Callback
}