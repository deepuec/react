import React from "react";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import Items from "../Items/Items";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Hoc";
const sideDrawer = (props) => {
    let sideDrawerClasses = [classes.SideDrawer, classes.Closed];
    if(props.show){
        sideDrawerClasses.pop();
        sideDrawerClasses.push(classes.Open);
    }
    return (
        <Aux>
        <Backdrop show={props.show} clicked={props.clicked} />
        <div className={sideDrawerClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <Items />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;