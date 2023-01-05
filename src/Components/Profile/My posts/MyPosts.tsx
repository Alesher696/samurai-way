import React from "react";
import m from './MyPosts.module.css'
import {Post} from "./Posts/Posts";

export const MyPosts = () => {
    let value = "Hello its my first"

    return (
        <div>
            <div>
                <textarea/>
                <button>Send</button>
            </div>
            <Post value={value} likes = {9}/>
            <Post value={value} likes = {15}/>
            <Post value={value} likes = {2}/>
        </div>
    )
}



