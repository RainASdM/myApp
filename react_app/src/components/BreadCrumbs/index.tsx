/**
 *  @author: RainASdM
 *  @date: 2021-06-13 17:40
 *  @description  面包屑导航组件
 */

//依赖库
import React from "react";
import {Link} from "react-router-dom";
import {Breadcrumb} from "antd"

//依赖方法
import {getPageList} from "./lib/functions"

//配置
import {pageConfig} from "../../config/pageConfig"

//静态类型
import {result_interface} from "./types"

//主组件
const BreadCrumbs = () => {
    const pageName = window.location.pathname.split("/").slice(1);

    if (pageName.length === 0) return (
        <Breadcrumb.Item>
            <Link to="/">首页</Link>
        </Breadcrumb.Item>
    )

    //初始化reduce参数
    const result: result_interface = {
        child: [],
        list: [{
            path: "/",
            name: "首页"
        }]
    }

    //页面路径信息
    const pageInfoList = getPageList({pageName, pageConfig, result})


    return (
        <Breadcrumb>
            {
                // @ts-ignore
                pageInfoList.map((page: { path: string; name: string; }) => {

                    return (
                        <Breadcrumb.Item key={page.path}>
                            {
                                <Link to={page.path}>{page.name}</Link>
                            }
                        </Breadcrumb.Item>
                    )

                })
            }
        </Breadcrumb>
    )
}

export default BreadCrumbs