import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
];

const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p> Current Price : <strong>${props.price.toFixed(2)} </strong></p>
            {
                controls.map( (ctrl) => {
                    return (<BuildControl 
                        key={ctrl.label} 
                        Label={ctrl.label} 
                        added={()=>{props.ingredientsAdded(ctrl.type)}} 
                        removed={()=>{props.deleteIngredients(ctrl.type)}}
                        ingredients={props.ingredients[ctrl.type]}
                        ></BuildControl>
                    )
                        
                })
            }
            <button className={classes.OrderButton} 
            disabled={props.isEnable <= 0}
            onClick={props.orderNow}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;