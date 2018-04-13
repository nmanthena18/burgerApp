import React from 'react';

import LogoPath from '../../../assets/images/burger-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {

    let toggleClasses = props.show ? [classes.SideDrawer, classes.Open] : [classes.SideDrawer, classes.Close]   
    return(
        <div className={toggleClasses.join(' ')}>
            <img src={LogoPath} alt="Burger" style={{height:props.LogoHeight}} />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default sideDrawer;