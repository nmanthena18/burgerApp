
import React from 'react';

import Aux from '../../../hoc/Aux'

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
        </Aux>
    )
}

export default orderSummary;