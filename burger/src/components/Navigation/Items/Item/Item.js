import React from "react";
import classes from "./Item.css";
import { NavLink } from "react-router-dom";
const item = (props) => {
    return (
        <li className={classes.Item}>
            <NavLink to={props.href}>{props.children}</NavLink>
        </li>
    );
}

export default item;