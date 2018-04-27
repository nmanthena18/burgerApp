import React, {Component} from 'react';
import Order from '../../components/Order/Order';
import Axios from '../../Axios';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state ={
        loading:true
    }
    componentDidMount(){
      let order=[];
      Axios.get('orders.json').then(res => {
            for(let key in res.data){
                order.unshift({...res.data[key], id:key});
                this.setState({order, loading:false});
            }
        }).catch(err =>{
            this.setState({loading:false});
        });
    }
    render(){
        return(
            <div>
                {
                  this.state.order ? this.state.order.map( (item,i) =>{     
                    return <Order data={item} key={item.id}/>
                }) : <Spinner />
                 }
            </div>
        )
    }
}

// const getAllOrders = ()=>{
//     Axios.get('orders.json').then(res => {
//         console.log(res);
//     }).catch(err => err)
// }

export default withErrorHandler(Orders, Axios);