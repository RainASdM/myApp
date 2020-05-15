/**
 *  @author: RainASdM
 *  @date: 2020-04-09 22:25
 *  @description  数据请求模块引用方法
 */

/**
 * 初始化请求库
 * @param axios
 */
export const initComponent = (axios: any) => {

    const myApp_Axios = axios.create();

    //超时时间
    myApp_Axios.defaults.timeout = 500000;

    myApp_Axios.defaults.baseURL = "http://192.168.0.108:4000";

    //请求中间件
    myApp_Axios.interceptors.request.use(
        (config: any) => {

            const apiLanguage = 'zh-CN' // 默认是中文网站，后续从cookie中获取
            config.headers = {
                'Accept-Language': apiLanguage,
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Brand': '',
                'Pragma': 'no-cache',
                'Cache-Control': 'no-cache',
                'Sales-Channel': '',
                'Market-Country-Code': 'CN',
                'User-Token': '',
                'Access-Control-Allow-Origin': '',
                'Access-Control-Allow-Credentials': '',
                'Access-Control-Allow-Headers':'Authorization,Origin, X-Requested-With, Content-Type, Accept'
            }

            //config.withCredentials = true;

            return config
        },

        (err: any) => {
            return Promise.reject(err);
        }
    );

    //相应中间件
    myApp_Axios.interceptors.response.use(

        (response: any) => {
            return response;
        },

        (err: any) => {
            return Promise.reject(err)
        }

    );

    return myApp_Axios;
};

export default {
    initComponent
}