import React from "react";
import p from './Posts.module.css'



type PostPropsType = {
    value : string
    likes?: number
}


export const Post = (props:PostPropsType) => {
    return (
        <div className={p.post}>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQND0Br49DEhXKhAaASompT8rXn8mzWE6r92A&usqp=CAU'}/>
            <div>
                {props.value}
            </div>
            <button>like</button>
            <button>editor</button>
            <div>likes: {props.likes}</div>
        </div>
    )
}