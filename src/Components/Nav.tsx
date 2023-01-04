import React from "react";
import n from "./Nav.module.css"

export const Nav = () => {
    return (
        <div className={n.Nav}>
            <div className={n.nav_el}>Home</div>
            <div className={n.nav_el}>Page</div>
            <div className={n.nav_el}>Options</div>
            <div className={n.nav_el}>Contacts</div>
        </div>
    )
}