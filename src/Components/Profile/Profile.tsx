import React from "react";
import p from './Profile.module.css'
import {MyPosts} from "./My posts/MyPosts";


export const Profile = () => {
    return (
        <div className={p.Content}>
            Ava + profile

            <MyPosts/>

        </div>
    )
}