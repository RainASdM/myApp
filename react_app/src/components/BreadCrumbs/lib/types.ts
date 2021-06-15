/**
 *  @author: RainASdM
 *  @date: 2021-06-15 02:30
 *  @description
 */

//pageConfig单一项类型
export type onePageConfig_type = { path: string, name: string, children: string }

//pageConfig类型
type pageConfig_type = Array<onePageConfig_type> | Array<any>

//返回参数
export interface result_interface {
    child: pageConfig_type,
    list: Array<{ path: string, name: string }> | Array<any>
}

//方法入参
export interface getPageList_interface {
    pageName: string[],
    pageConfig: pageConfig_type,
    result: result_interface
}