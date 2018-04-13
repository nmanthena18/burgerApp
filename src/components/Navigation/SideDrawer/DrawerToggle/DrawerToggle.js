import React from 'react';

import Aux from '../../../../hoc/Auxolary'
import classes from './DrawerToggle.css';

const drawerToggler = (props) =>{
    return (
        <Aux>
            <div className={classes.DrawerToggle} onClick={props.clicked}>{props.children}</div>
        </Aux>
    )
}

export default drawerToggler;