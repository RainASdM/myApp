/**
 *  @author: RainASdM
 *  @date: 2021-06-10 18:13
 *  @description  全局错误和异常捕获处理组件
 */
//基本库
import React, {useEffect} from "react";

//方法
import {catch_UnhandledRejection} from "./lib/functions"

//静态类型
import {props_interface} from "./types"

// @ts-ignore
const ErrorCatch: React.FC<props_interface> = (props) => {
    useEffect(() => {

        window.addEventListener("unhandledrejection",
            (event) => catch_UnhandledRejection(event))

    }, [])

    return props.children
}

export default ErrorCatch;