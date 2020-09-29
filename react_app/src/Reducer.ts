/**
 *  @author: RainASdM
 *  @date: 2020-09-29 14:39
 *  @description
 */

import {combineReducers} from "redux"

const index_Reducer = (state = {name: "index"}, action: {type: string} ) => {
    switch (action.type) {
        case "asd": {
            return "asd"
        }
        case "dsa": {
            return "dsa"
        }
        default: {
            return "aaa"
        }
    }
}

const login_Reducer = (state = {name: "index"}, action: {type: string} ) => {
    return action.type;
}


const Reducer = combineReducers(
    {
        index_Reducer,
        login_Reducer
    }
)

export default Reducer;