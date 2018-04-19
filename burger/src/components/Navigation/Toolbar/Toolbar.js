import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import Items from "../../Navigation/Items/Items";
import HandBurger from "../SideDrawer/HandBurger/HandBurger"
const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
        
        <HandBurger openSideDrawer={props.openSideDrawer} classes={classes.MobileOnly} count={3} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <Items />
            </nav>
        </header>
    )
}

export default toolbar;