import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3,
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4,
        perchasable:false,
        perchasing:false,
    }

    addIngredientHandler = (type) => {
        const updatedCount = this.state.ingredients[type]+1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({
            ingredients:updatedIngredients,
            totalPrice:updatedPrice
        });
        this.perchasable(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const removedCount = this.state.ingredients[type] > 0 ? this.state.ingredients[type]-1 : 0;
        const removedIngredients = {...this.state.ingredients};
        removedIngredients[type] = removedCount;
        const removedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients:removedIngredients,
            totalPrice:removedPrice
        });
        this.perchasable(removedIngredients);
    }

    init(){
        let initPrice = this.state.totalPrice;
        for(let key in INGREDIENTS_PRICE){
            initPrice+=this.state.ingredients[key]*INGREDIENTS_PRICE[key]
        }
        this.setState({
            totalPrice:initPrice
        });        
    }

    perchasable = (ing) =>{
        const ingredientsCount = Object.keys(this.state.ingredients).map( item => ing[item])
        .reduce( (sum, el) =>{
            return sum+el;
        },0)
        this.setState({
            perchasable:0<ingredientsCount
        });
    }

    perchaseHandler = () => {
        this.setState({
            perchasing : true
        });        
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientsAdded={this.addIngredientHandler} 
                    deleteIngredients={this.removeIngredientHandler}
                    price={this.state.totalPrice} isEnable={this.state.perchasable}
                    ingredients={this.state.ingredients} 
                    orderNow={this.perchaseHandler}/>
                <Modal show={this.state.perchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
            </Aux>
        )
    }

    componentDidMount() {
       this.init();        
    }
}

export default BurgerBuilder;