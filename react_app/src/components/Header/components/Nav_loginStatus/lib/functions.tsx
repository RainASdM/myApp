/**
 *  @author: RainASdM
 *  @date: 2020-05-22 14:12
 *  @description  组件引用方法集
 */

//引入依赖库
import Request from "../../../../../utils/Request";

//接口类型
//登录
interface logIn_interface {
    useName: string,
    password: string
}

//登录回调
interface logIn_Callback_interface {

}

// 退出登录回调
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

const setLoginStatus : (result: object) => {} = () => {

}

/**
 * 登录请求
 */
const logIn = ({useName, password} : logIn_interface, setLoginStatus : (result: object) => {}) => {
    Request.POST({
        params: {useName, password},
        path: "/login",
        callback: (result: object) => {
            setLoginStatus(result);
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
    setLoginStatus,
    logIn,
    logIn_Callback,
    logOut,
    logOut_Callback
}