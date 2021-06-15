/**
 *  @author: RainASdM
 *  @date: 2021-06-10 19:30
 *  @description 静态类型接口文件
 */

export interface error_interface {
    reason: errorReason_interface
}

export interface errorReason_interface extends Error {
    apiErrors: []
}
