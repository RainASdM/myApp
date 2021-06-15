/**
 *  @author: RainASdM
 *  @date: 2021-06-10 18:46
 *  @description
 */

//依赖库
import React from "react";
import {Modal} from "antd"

//静态类型
import {error_interface, errorReason_interface} from "./types";


/**
 * 捕获unhandledrejection异常
 * @param event  事件对象
 */
const catch_UnhandledRejection = (event: error_interface) => {
    if (event?.reason === null) return;

    return errorCallback(event.reason);
}



/**
 * 错误信息展示
 * @param errorReason  错误信息
 */
const errorCallback = (errorReason: errorReason_interface) => {
    if (Array.isArray(errorReason.apiErrors)) {
        const errors = (errorReason.apiErrors || []).map(({errorMessage}) => errorMessage);
        return <Modal title="系统异常">
            <ul>
                {
                    errors.map((msg: string, index: number) => <li key={index}>{msg}</li>)
                }
            </ul>
        </Modal>
    }
}

export {
    catch_UnhandledRejection
}