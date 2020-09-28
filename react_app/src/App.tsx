/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:43
 *  @description  全局导航栏组件
 */

//引入依赖库
import React from 'react';

//引入子组件
import Header from "./public_Components/Header/Header";
import Index from './pages/Index'


import './App.css';

function App() {

    return (
        <div className="App">
            <Header/>
            <main>
                <Index/>
            </main>
        </div>
    );
}

export default App;
