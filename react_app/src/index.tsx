import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.less';
import * as serviceWorker from './serviceWorker';

//路由组件
import Router from "./Router"

//Redux组件
import {Provider} from "react-redux";
import store from "./store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
