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
      let data=[];
      Axios.get('orders.json').then(res => {
            for(let key in res.data){
                data.push({...res.data[key]});
                this.setState({data, loading:false});
            }
        }).catch(err =>{
            this.setState({loading:false});
        });
    }
    render(){
        return(
            <div>
                {
                  this.state.data ? this.state.data.map( (item,i) =>{            
                    return <Order data={item} key={'order-'+i}/>
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