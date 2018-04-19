import React from "react";

import classes from "./Items.css";
import Item from "./Item/Item";
const items = (props)=>{
    return <ul className={classes.Items}>
        <Item href="/" active>Home</Item>
        <Item href="/checkout">Checkout</Item>
        <Item href="/summary">Order Summary</Item>
    </ul>
}

export default items;