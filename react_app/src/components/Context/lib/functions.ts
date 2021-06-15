/**
 *  @author: RainASdM
 *  @date: 2021-06-12 01:51
 *  @description
 */

//静态类型
import {Dispatch, SetStateAction} from "react"
import {context_type} from "./types"

/**
 * 修改context
 * @param context
 * @param setContext
 */
const changeContexts = (context: context_type, setContext: Dispatch<SetStateAction<{ theme: string; }>>) => {

    return (changeList: [{ key: string, value: any }]) => {
        if (!Array.isArray(changeList)) return false;

        changeList.forEach(({ key, value }) => {
            if (!Object.keys(context).includes(key)) return false

            const newContext: context_type = Object.assign(context, {[key] : value});

            setContext(newContext)
        })
    }

}

export {
    changeContexts
}