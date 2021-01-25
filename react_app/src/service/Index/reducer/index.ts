/**
 *  @author: RainASdM
 *  @date: 2020-09-29 15:18
 *  @description
 */

import {IS_INDEX, SHOW} from "../constant"

interface indexReducer {
    indexState: object,
    action: {
        type: string
    }
}

const indexReducer = ({indexState, action}: indexReducer) => {
    switch (action.type) {
        case IS_INDEX: {
            break;
        }
        case SHOW: {
            break;
        }
    }
}

export default indexReducer;