/**
 *  @author: RainASdM
 *  @date: 2021-06-12 00:36
 *  @description  应用全局上下文组件
 */

//依赖库
import React, {useState} from "react";

//依赖方法
import {changeContexts} from "./lib/functions";

//静态类型
import {ProviderProps} from "react"

//子组件
import {Context} from "./components/Main_context"

const Context_Component = (props: ProviderProps<any>) => {

    const [context, setContext] = useState({
        theme: "light"//主题
    })

    const contextValue = {
        context,
        changeContexts: changeContexts(context, setContext)
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}


export default Context_Component