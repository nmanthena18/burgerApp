import React, { Component } from 'react';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../Axios';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state ={
        loading:false,
        price:0,
        ingredients:null
    }
    render(){
        return(
            <div className={classes.ContactData}>
            {this.state.loading ? <Spinner /> :
                <form>
                    <p><input type="text" name="name" placeholder="Your Name" /></p>
                    <p><input type="email" name="email" placeholder="Your Email" /></p>
                    <p><input type="text" name="phone" placeholder="Your Phone number" /></p>
                    <p><input type="text" name="postal" placeholder="Your Postal code" /></p>
                    <p><textarea type="text" name="address" placeholder="Your Address"></textarea></p>
                    <Button btnType="Success" clicked={this.orderDetails} isDesabled={!this.props.isEnabled}>Order</Button>
                </form> 
            }               
            </div>
        );
    }

    orderDetails = (e) =>{
        e.preventDefault();
         this.setState({
            loading:true,
            perchasing:false
        })
        let orders = {
            ingredients:this.state.ingredients,
            totalPrice:this.props.price,
            user:{
                name:"Naresh",
                email:"nmanthena18@gmail.com",
                address:"hyd",
                pin:"500072"
            }
        }
        axios.post('orders.json', orders).then(
            response => {
                this.setState({loading:false,  perchasing:false});
                this.props.history.push('/burger-builder');
            }
        ).catch(
            err => {
                this.setState({loading:false,  perchasing:false});
            }
        )
    }
}

export default ContactData;