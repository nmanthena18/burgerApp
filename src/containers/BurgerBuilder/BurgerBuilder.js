import React, { Component } from 'react';

import Aux from '../../hoc/Auxolary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../Axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENTS_PRICE = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3,
}

class BurgerBuilder extends Component {
    
    state = {
        ingredients: null,
        totalPrice:4,
        perchasable:false,
        perchasing:false,
        loading:false,
        error:false
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

    perchaseHandlerCancel = () =>{
        this.setState({
            perchasing : false
        });
    }

    perchaseContinueHandler = () =>{
        this.setState({
            loading:true,
            perchasing:false
        })
        let orders = {
            ingredients:this.state.ingredients,
            totalPrice:this.state.totalPrice,
            user:{
                name:"Naresh",
                emain:"nmanthena18@gmail.com",
                address:"hyd",
                pin:"500072"
            }
        }
        axios.post('orders.json', orders).then(
            response => {
                this.setState({loading:false,  perchasing:false});
            }
        ).catch(
            err => {
                this.setState({loading:false,  perchasing:false});
            }
        )
    }


    render(){
        let orderSummary = null;
        let burger = this.state.error ? <p>Unable to fetch the data</p> :<Spinner />;
        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientsAdded={this.addIngredientHandler} 
                        deleteIngredients={this.removeIngredientHandler}
                        price={this.state.totalPrice} isEnable={this.state.perchasable}
                        ingredients={this.state.ingredients} 
                        orderNow={this.perchaseHandler}/>
                </Aux>
            )
            orderSummary =  <OrderSummary ingredients={this.state.ingredients} modalClosed={this.perchaseHandlerCancel}
             perchaseContinueHandler={this.perchaseContinueHandler}
            totalPrice={this.state.totalPrice}
        />
                
        }
        
        if(this.state.loading){
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                {burger}
                <Modal show={this.state.perchasing} modalClosed={this.perchaseHandlerCancel}>
                   {orderSummary}
                </Modal>
            </Aux>
        )
    }

    componentDidMount() {
        axios.get('/ingredients.json').then(res =>{
            this.setState({
                ingredients : res.data               
            });
            this.init(); 
        }).catch( err =>{
            this.setState({ error:true})
        })         
    }
}

export default withErrorHandler(BurgerBuilder, axios);