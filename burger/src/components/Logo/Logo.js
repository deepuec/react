import React from "react";
import classes from "./Logo.css";
import burgerLogo from "../../assets/images/burger-logo.png";
const logo = ()=>(
    <div className={classes.Logo}>
    <a href="/">
        <img src={burgerLogo} alt="My Burger"/> </a>
    </div>
);
export default logo; 