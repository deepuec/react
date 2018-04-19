import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from './Layout.css';

class Layout extends React.Component{
    state = {
        showSideDrawer : false
    }
    sideDrawerCloseHandler = ()=>{
        this.setState({showSideDrawer:false})
    }
    openSideDrawer = ()=>{
        this.setState({showSideDrawer:true})
    }
render(){
    return (
        <Aux>
        <Toolbar openSideDrawer={this.openSideDrawer}/>
        <SideDrawer clicked={this.sideDrawerCloseHandler} show={this.state.showSideDrawer}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Aux>
    );
}
}

export default Layout;