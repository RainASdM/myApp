/**
 *  @author: RainASdM
 *  @date: 2020-10-04 22:49
 *  @description  首页轮播图组件
 */

//基本库
import React from "react";
import {Carousel} from "antd";

const Index_Carousel = () => {

    const data = {
        className: "index_Carousel",
        contentStyle: {
            height: '460px',
            color: '#fff',
            lineHeight: '160px',
            background: '#364d79'
        }
    }

    return (
        <section className={data.className}>
            <Carousel autoplay>
                <div>
                    <h3 style={data.contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={data.contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={data.contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={data.contentStyle}>4</h3>
                </div>
            </Carousel>
        </section>
    )
}

export default Index_Carousel;