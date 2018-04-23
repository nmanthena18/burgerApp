import React from 'react';

import Burger from '../../Burger';
import Button from '../../../UI/Button/Button';
import classes from './CheckoutSummary.css'

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it testes well..! </h1>
            <div style={{width:'100%', height:'300px', margin:'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <strong>Your total price is {props.price}</strong> <br/>
            <Button btnType="Danger" clicked={props.checkoutCancelHandler}>CANCEL</Button>
            <Button btnType="Success" clicked={props.checkoutContinueHandler} isDesabled={!props.isEnabled}>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;