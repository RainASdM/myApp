/**
 *  @author: RainASdM
 *  @date: 2020-05-04 21:43
 *  @description  全局导航栏组件
 */

//引入依赖库
import React from 'react';

//引入子组件
import Nav from './public_Components/Nav';
import Index from './pages/Index'

// import logo from './logo.svg';

import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Nav/>
            </header>
            <main>
                <Index/>
            </main>
        </div>
    );
}

export default App;
