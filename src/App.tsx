import React from 'react';
import './App.css';
import {log} from "util";
import Insiders from './Insiders';
import StarsInStar from './StarsInstar' ;

function App() {
    console.log('App rendering')
    return (

        <div className="App">
            <p>Hello, samurai! Let's go!</p>
            <Insiders/>
            <StarsInStar></StarsInStar>
            <StarsInStar></StarsInStar>
        </div>
    );
}


export default App;
