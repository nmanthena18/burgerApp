
import React from 'react';

import Aux from '../../../hoc/Auxolary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{
    const ingredientSummary = Object.keys(props.ingredients).map( item => {
        return <li key={item}><span style={{textTransform:'capitalize'}}>{item}</span>: {props.ingredients[item]}</li>
    });

    return (
        <Aux>
            <h3>Your Orders </h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: </strong> {props.totalPrice.toFixed(2)}</p>
            <p>Continue to Checkout</p>
            <Button clicked={props.modalClosed} btnType="Danger">CANCEL</Button>
            <Button btnType="Success" clicked={props.perchaseContinueHandler}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;