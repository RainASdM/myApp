import React from 'react';

import Request from './utils/Request/index';

import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div onClick={() => {
                    console.info(Request.GET({
                        path: "/asd",
                        callback: () => {
                        }
                    }));
                }}
                    >asd</div>
                    </header>
                    </div>
                    );
                }

                     export default App
                ;
