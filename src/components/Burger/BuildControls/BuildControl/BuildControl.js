import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) =>{
    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label} >{props.Label}</div>
            <button className={classes.Less} disabled={props.ingredients<= 0} onClick={props.removed}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}

export default buildControl;