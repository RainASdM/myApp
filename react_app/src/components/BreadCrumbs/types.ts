/**
 *  @author: RainASdM
 *  @date: 2021-06-15 02:05
 *  @description
 */

export interface result_interface {
    child: [{ path: string, name: string, children: string }] | any[],
    list: [{ path: string, name: string }] | any[]
}