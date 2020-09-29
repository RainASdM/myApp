/**
 *  @author: RainASdM
 *  @date: 2020-09-29 14:36
 *  @description  应用的redux store
 */

//基本库
import {createStore} from "redux";

//Reducer
import Reducer from "./Reducer";

//创建store
const store = createStore(Reducer);

export default store;