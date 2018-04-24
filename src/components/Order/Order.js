
import React from 'react';
import classes from './Order.css'

const Order = (props) =>{
    const Ingredients = [];
    for(let item in props.data.ingredients){
        Ingredients.push({name:item,
            amount:props.data.ingredients[item]});
    }
    const inOutput = Ingredients.map( (item, i) =>{
        return <span className={classes.Item} key={'ing'+i}>{item.name}-{item.amount} </span>
    })
    return (
        <div className={classes.Order}>
            <p><span>Name:{props.data.user.name}</span> <span> {props.data.user.email}</span></p>
            <p>Price: <b>{props.data.totalPrice}</b></p>
            <label>Used Ingredients</label>
            <hr/>
            {inOutput}
        </div>
    )
}

export default Order;