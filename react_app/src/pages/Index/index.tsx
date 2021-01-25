/**
 *  @author: RainASdM
 *  @date: 2020-05-04 20:47
 *  @description  首页组件
 */

//引入依赖库
import React, {useState} from "react";

//配置文件
import {Index_Column} from "./config"

//子组件
import Index_Carousel from "./components/Index_Carousel"
import Column from "./components/Column";

//接口
interface thisColumn {
    name: string,
    value: string
}

const Index = () => {

    const [] = useState({})


    return (
        <>
            <Index_Carousel/>
            {
                Index_Column.map((thisColumn:thisColumn) => {
                    return (
                        <>
                            <Column thisColumn={thisColumn}/>
                        </>
                    )
                })
            }
        </>
    )
}

export default Index;
