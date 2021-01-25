/**
 *  @author: RainASdM
 *  @date: 2020-09-29 15:16
 *  @description
 */

import {connect} from "react-redux";

import {IS_INDEX, SHOW} from "../constant"

import {createActionIsIndex} from "../action/index"


const mapStateToProps = (state : object) => {
    name: state.index_Reducer.name
};

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)