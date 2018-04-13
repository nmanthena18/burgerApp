
import React from 'react';

import classes from './Toolbar.css';
import LogoPath from '../../../assets/images/burger-logo.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.showDrawer}>MENU</DrawerToggler>
        <div className={[classes.Logo, classes.DesktopOnly].join(' ')}>
            <img src={LogoPath} alt="Burger" />
        </div>
        <nav className={classes.DesktopOnly}>
           <NavigationItems />
        </nav>
    </header>
)


export default toolbar;