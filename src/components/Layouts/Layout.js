import React, {Component} from 'react';
import { Route, Link  } from 'react-router-dom'
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
                
                <Route exact path='/burger-builder' render={()=> {
                    return(
                        <main className={classes.content}>
                         {this.props.children}
                        </main>
                    )
                }}/>

                <Route exact path='/' render={()=> {
                    return(
                        <Aux>
                            <div style={{textAlign:"center", marginTop:'100px'}}>
                            <p>Welcome to Burger Application</p>
                            <Link to='/burger-builder'>Click here to continue</Link> 
                            </div>
                        </Aux>  
                    )
                }}/>

                <Route exact path='/checkout' render={()=> {
                    return(
                        <Aux>
                            <div style={{textAlign:"center", marginTop:'100px'}}>
                            <p>Coming soon...</p>
                            </div>
                        </Aux>  
                    )
                }}/>

            </Aux>
            
        )
    }
}

export default Layout;