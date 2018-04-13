import React, {Component} from 'react';

import Aux from '../../hoc/Auxolary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import BackDrop from '../UI/Backdrop/Backdrop';

class Layout extends Component {
    state = {
        show:true
    }
    toggleBackDrop = () => {
        this.setState({
            show:false
        })
    }
    sideDrawerToggle = () => {
        this.setState( (prevState) =>{
            return { show: !prevState.show }
        })
    }
    render (){
        return (
            <Aux>
                <Toolbar showDrawer={this.sideDrawerToggle}/>
                <SideDrawer LogoHeight="8%" show={this.state.show}/>
                <div className={classes.BackDrop}>
                    <BackDrop show={this.state.show} clicked={this.toggleBackDrop} />
                </div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;