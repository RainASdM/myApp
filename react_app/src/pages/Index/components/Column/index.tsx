/**
 *  @author: RainASdM
 *  @date: 2020-10-04 23:02
 *  @description  首页内容展示列
 */

//基本库
import React from "react";

//接口
interface props {
    thisColumn: {
        name: string
    }
}

const Column = (props: props) => {

    const data = {
        className: "index_Column"
    }

    const {thisColumn: {name: column_name = "标题"}} = props;

    return (
        <section className={data.className}>
            <h3>{column_name}</h3>
            {

            }
        </section>
    )
}

export default Column
