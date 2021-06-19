/**
 *  @author: RainASdM
 *  @date: 2021-06-16 03:13
 *  @description
 */

//登录
export interface logIn_interface {
    useName: string,
    password: string
}

// 退出登录回调
export interface logOut_Callback_interface {
    result: object;
}