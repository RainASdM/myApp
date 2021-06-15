/**
 *  @author: RainASdM
 *  @date: 2021-06-13 02:14
 *  @description
 */

//依赖库
import {createContext} from "react";

//依赖方法
import {changeContexts} from "../../lib/functions";

const context =  {
    theme: "light"//主题
}

export const Context = createContext({
    context,
    changeContexts: changeContexts(context, () => {})
})

