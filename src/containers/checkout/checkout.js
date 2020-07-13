import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from './thunks';

import Header from '../common/header';
import NewCustomerForm from './newCustomerForm';
import ExistingCustomerForm from './existingCustomerForm';
import Summary from './summary';

const Checkout = props => {

    const [customerForm, setCustomerForm] = useState(1);

    const handleOptionChange = (e) => {
        setCustomerForm(e.target.value);
    }

    return (
        // if (!this.props.products.products) {
        //     return (<div>There is not connection to the server...</div>)
        // }
        <div>
            <Header />
            <div className="box">
                <div className="container">
                    <h1>Checkout order</h1>
                    <h3>Customer Information</h3>
                </div>
            </div>
            <hr className="offset-md"></hr>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <label>Are you?</label><br />
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="col-sm-6">
                                            <input type="radio" id="male" name="type_user" value="1" onChange={ (e) => handleOptionChange(e)} />
                                            <label for="nc"> New Customer</label><br />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="radio" id="female" name="type_user" value="2" onChange={ (e) => handleOptionChange(e)}/>
                                            <label for="ec"> Existing Customer</label><br />
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                { customerForm == 1 ? <NewCustomerForm sendData={ (data) => props.onSubmitForm(data, JSON.stringify(props.products.cartItems)) } /> : <ExistingCustomerForm /> }
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <hr className="offset-sm visible-sm" />
                        <Summary />
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    products: state.products,
})

const mapDispatchToProps = dispatch => ({
    onSubmitForm: (item, products) => dispatch(addProductToCart(item, products))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);