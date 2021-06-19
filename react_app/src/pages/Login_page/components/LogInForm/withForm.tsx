/**
 *  @author: RainASdM
 *  @date: 2021-06-18 04:30
 *  @description
 */

//依赖库
import React, {Component} from "react";

//依赖方法


//静态类型
import {props_interface} from "./types"

//子组件

const withForm = (form : React.ComponentType<props_interface>) : React.ComponentClass<{}> => {

    const Form : React.ReactNode = form

    return class extends Component<props_interface, any> {
        constructor(props : props_interface) {
            super(props);
        }

        render(): React.ReactNode {
            return <Form {...this.props}/>
        }
    }
}




export default withForm