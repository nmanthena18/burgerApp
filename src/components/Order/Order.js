
import React from 'react';
import classes from './Order.css'

const Order = (props) =>{
    return (
        <div className={classes.Order}>
            <p><span>Name:{props.data.user.name}</span> <span> {props.data.user.email}</span></p>
            <p>Total Amount: {props.data.totalPrice}</p>
        </div>
    )
}

export default Order;