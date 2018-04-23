import React, { Component } from 'react';
import { Route, Link, Switch  } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

import Aux from './hoc/Auxolary';

class App extends Component {
  render() {
    return (
        <Layout>
            <Route path='/' exact render={()=> {
                    return(
                        <Aux>
                            <div style={{textAlign:"center", marginTop:'100px'}}>
                            <p>Welcome to Burger Application</p>
                            <Link to='/burger-builder'>Click here to continue</Link> 
                            </div>
                        </Aux>  
                    )
              }}/>
            <Switch>
              <Route path='/burger-builder' component={BurgerBuilder} />             
              <Route path='/checkout' component={Checkout}/>              
              <Route path='/orders' component={Orders}/>              
            </Switch>
        </Layout>
   
    );
  }
  
}

export default App;
