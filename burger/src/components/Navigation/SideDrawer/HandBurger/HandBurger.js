import React from "react";

const handBurger = (props)=>{
    let handBurgerCount = [];
    for(let i=0;i<props.count;i++){
        handBurgerCount.push(<div key={i}></div>);
    }
    return (
        <div onClick={props.openSideDrawer} className={props.classes}>
            {handBurgerCount}
        </div>
    );
}

export default handBurger;