import React from "react";
import n from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={n.Nav}>
            <div className={n.nav_el}>Start page</div>
            <div className={n.nav_el}>Messages</div>
            <div className={n.nav_el}>Music</div>
            <div className={n.nav_el}>Friends</div>
        </div>
    )
}