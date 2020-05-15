/**
 *  @author: RainASdM
 *  @date: 2020-04-09 14:13
 *  @description  页面数据请求组件
 */

import * as Axios from "axios";

import {initComponent} from "./event";

/**
 * @param path  请求路径
 * @param params  请求参数
 * @param callback  请求回调方法
 * @param type  请求回调方法
 */
interface requestBase_params {
    path: string,
    params: any,
    callback: any,
    type: string
}

/**
 * @param path  请求路径
 * @param params  请求参数
 * @param callback  请求回调方法
 */
interface GET_params {
    path: string,
    callback: any
}

/**
 * @param path  请求路径
 * @param params  请求参数
 * @param callback  请求回调方法
 */
interface POST_params {
    path: string,
    params: any,
    callback: any
}

class Request {
    instance: any;

    constructor() {
        this.instance = null;
    }

    /**
     * get方法
     * @param requestBase_params
     */
    static requestBase(requestBase_params: requestBase_params) {

        const {path, params, callback, type} = requestBase_params;

        const myApp_Axios = initComponent(Axios);

        return new Promise((resolve, reject) => {

            myApp_Axios[type](path, params)

                .then((res: any) => {
                    callback();
                    resolve(res);
                })

                .catch((err: any) => {
                    reject(err);
                });

        })

    }
}


export default {
    GET: (get_params: GET_params) => {
        return Request.requestBase({...get_params,params: null, type: "get"})
    },
    POST: (get_params: POST_params) => {
        return Request.requestBase({...get_params, type: "post"})
    }
};