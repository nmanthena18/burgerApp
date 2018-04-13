
import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const Navigation = [
    {
        name:"Home",
        link:"/",
        isActive:true
    },
    {
        name:"Burger Builder",
        link:"/burger-builder"
    },
    {
        name:"Checkout",
        link:"/checkout"
    }
]
const navigationItems = (props) => {

    const NavItems = Navigation.map( (item, i) =>{
        return <NavigationItem name={item.name} link={item.link} isActive={item.isActive} key={i}>{item.name}</NavigationItem>
    });

    return(
    <ul className={classes.Navigation}>
        {NavItems}
    </ul>
    )
};

export default navigationItems;