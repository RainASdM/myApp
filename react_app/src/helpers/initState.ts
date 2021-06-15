/**
 *  @author: RainASdM
 *  @date: 2021-03-18 22:04
 *  @description  Reducer初始化状态集
 */


interface LOGIN_STATE_interface {
    isLogin: false,
    username: "",
    userType: ""
}


//登录状态
const LOGIN_STATE: LOGIN_STATE_interface = {
    isLogin: false,
    username: "",
    userType: ""
}


export {
    LOGIN_STATE
}