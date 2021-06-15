/**
 *  @author: RainASdM
 *  @date: 2021-06-15 02:26
 *  @description
 */

//静态类型
import {onePageConfig_type, result_interface, getPageList_interface} from "./types"

/**
 *获取页面路径列表
 * @param pageName  页面路径
 * @param pageConfig  页面配置
 * @param result  reduce初始返回参数
 */
const getPageList = ({pageName, pageConfig, result}: getPageList_interface) => {

    //列表第一项为空则为首页，首页不展示面包屑
    if (!pageName[0]) return [];

    return pageName.reduce((result: result_interface, page: string, index: number) => {

        //一级路径
        if (index === 0) {

            const thisPage = pageConfig.filter((item: onePageConfig_type) => {
                return item.path === `/${page}`
            })[0];

            if (!thisPage) return result;

            const {path, name, children} = thisPage

            result.child = children;

            result.list.push({
                path,
                name
            })

            return result
        }

        //后续路径
        const thisPage = result.child.filter((item: onePageConfig_type) => item.path === `/${page}`)[0];

        const {path, name, children} = thisPage;

        const perPath = result.list[result.list.length - 1].path

        result.child = children;

        result.list.push({
            path: `${perPath}/${path}`,
            name
        })

        return result

    }, result).list
}


export {
    getPageList
}