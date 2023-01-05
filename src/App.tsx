import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Nav} from "./Components/Nav/Nav";
import {Profile} from "./Components/Profile/Profile";


function App() {
    console.log('App rendering')
    return (


        <div className="App">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
    );
}


export default App;
