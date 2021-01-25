/**
 *  @author: RainASdM
 *  @date: 2020-09-29 15:17
 *  @description
 */

interface createActionIsIndex {
    type: string,
    info: any
}

const createActionIsIndex = ({type, info}: createActionIsIndex) => {
    return {
        type,
        IS_INDEX: info
    }
}

export {
    createActionIsIndex
}