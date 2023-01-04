import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import {Nav} from "./Components/Nav";
import {Content} from "./Components/Content";


function App() {
    console.log('App rendering')
    return (


        <div className="App">
            <Header/>
            <Nav/>
            <Content/>
        </div>
    );
}


export default App;
