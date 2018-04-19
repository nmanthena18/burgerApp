import React, { Component } from 'react';
import { BrowserRouter  } from 'react-router-dom';
import Layout from './components/Layouts/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
            <BurgerBuilder/>
        </Layout>
      </BrowserRouter>

   
    );
  }
  
}

export default App;
