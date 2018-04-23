import React, {Component} from 'react';
import CheckoutSummary from '../../components/Burger/OrderSummary/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component {
    
    state = {
        ingredients: {
            Salad:0,
            Bacon:0,
            Cheese:0,
            Meat:0,   
        },
        price:0,
        isEnabled:false
    }

    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;
        for(let param of query.entries()){
            if(param[0] === 'price'){
                price = param[1]
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        if(Object.keys(ingredients).length > 0){
            this.setState({ingredients, isEnabled:true, price:price});
        }        
    }
   

    CheckoutCancelHandler = () => {
        this.props.history.goBack();
    }
    CheckoutContinueHandler = () => {
        this.props.history.replace(this.props.match.path+'/contact-data');
    }

    render(){
        return(
            <div>{this.props.match.isExact ? <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelHandler={this.CheckoutCancelHandler} checkoutContinueHandler={this.CheckoutContinueHandler} isEnabled={this.state.isEnabled} price={this.state.price} /> : null}                
                {this.state.isEnabled ? <Route path={this.props.match.path + '/contact-data'} render={(props) =>(<ContactData ingredients={this.state.ingredients} isEnabled={this.state.isEnabled} price={this.state.price} {...this.props}  />)} /> : null }
            </div>
        )
    }
    
}

export default Checkout;