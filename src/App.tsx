import React from 'react';
import './App.css';
import {log} from "util";
import Insiders from './Insiders';
import StarsInStar from './StarsInstar' ;
import Nav_bar from "./Nav_bar";


function App() {
    console.log('App rendering')
    return (


        <div className="App">
            <Nav_bar />
            <p>Hello, samurai! Let's go!</p>
            <DocTitle title="Profile" />
            <DocTitle title="My friends" />
            <StarsInStar value={3} />
            <Insiders/>

            <StarsInStar value={5} />
        </div>
    );
}

function DocTitle(props: any) {
    return <h1> {props.title}</h1>
}

export default App;
