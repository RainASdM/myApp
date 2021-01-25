/**
 *  @author: RainASdM
 *  @date: 2020-09-29 14:39
 *  @description
 */

import {combineReducers} from "redux"

const index_Reducer = (state = {name: "index"}, action: {type: string} ) => {
    switch (action.type) {
        case "asd": {
            return {...state, asd:"asd"}
        }
        case "dsa": {
            return {...state, asd:"dsa"}
        }
        default: {
            return {...state, asd:"aaa"}
        }
    }
}

const login_Reducer = (state = {name: "index"}, action: {type: string} ) => {
    return {...state, isLogin: action};
}


const Reducer = combineReducers(
    {
        index_Reducer,
        login_Reducer
    }
)

export default Reducer;