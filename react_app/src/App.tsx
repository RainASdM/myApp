/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:43
 *  @description  全局导航栏组件
 */

//引入依赖库
import React from 'react';

//引入子组件
import Index from './pages/Index'


import './App.css';

function App() {

    const data = {
        id: "index"
    }

    return (
        <div className="App">
            <main id={data.id}>
                <Index/>
            </main>
        </div>
    );
}

export default App;
