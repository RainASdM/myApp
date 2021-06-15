/**
 *  @author: RainASdM
 *  @date: 2020-09-29 15:16
 *  @description
 */

import {connect} from "react-redux";

/*interface LOGIN_STATE_interface {
    isLogin: false,
    username: "",
    userType: ""
}*/

const mapStateToProps = (state : {index_Reducer: {name: string}}) => ({
    name: state.index_Reducer.name
});

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)