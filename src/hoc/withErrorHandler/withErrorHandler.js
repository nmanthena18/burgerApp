import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxolary';

const withErrorHandler = (WrapperComponent, axios) =>{

    return class extends Component {
        state = {
            error:null
        }
        componentWillMount(){
            this.reqInterceptors = axios.interceptors.request.use(null,  error => {
                this.setState({
                    error :null
                })
            });
            this.resInterceptors = axios.interceptors.response.use(null,  error => {
                this.setState({
                    error
                });
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInterceptors);
        }

        removeErrorMsg = ()=>{
            this.setState({
                error:null
            })
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} modalClosed={this.removeErrorMsg}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;