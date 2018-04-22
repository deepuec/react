import React from "react";
import Burger from "../Burger/Burger";
import Button from "../UI/Button/Button"

const checkoutSummary = (props) => {

    return (
        <div>
            <h2>We hope it taste good!!!</h2>
            <div>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType="Danger" clicked={props.canceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.continued}>Continue</Button>
        </div>
    );
}


export default checkoutSummary;