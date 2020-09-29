/**
 *  @author: RainASdM
 *  @date: 2020-09-29 15:17
 *  @description
 */

const createActionIsIndex = (type,info) => {
    return {
        type,
        IS_INDEX: info
    }
}

export {
    createActionIsIndex
}