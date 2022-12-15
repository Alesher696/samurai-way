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
            <DocTitle title= "Profile"></DocTitle>
            <DocTitle title="My friends"></DocTitle>
            <StarsInStar value={3}></StarsInStar>
            <Insiders/>

            <StarsInStar value={5}></StarsInStar>
        </div>
    );
}

function DocTitle (props : any){
    return <h1> {props.title}</h1>
}

export default App;
