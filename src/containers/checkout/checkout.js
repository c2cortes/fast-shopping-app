import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { addProductToCart } from './thunks';
import { resetState } from './thunks';

import Header from '../common/header';
import NewCustomerForm from './newCustomerForm';
import ExistingCustomerForm from './existingCustomerForm';
import Summary from './summary';
import CustomerInfo from './customerInfo';
import Thankyou from './thankyou';

const Checkout = props => {

    const [customerForm, setCustomerForm] = useState(2);
    const [customerInfo, setCustomerInfo] = useState();
    const [currentSection, setCurrentSection] = useState('checkout');

    const handleOptionChange = (e) => {
        setCustomerForm(e.target.value);
    }

    useEffect(() => {
        if (props.checkout && props.checkout.customerInfo && props.checkout.customerInfo.customer) {
            setCustomerInfo(props.checkout.customerInfo.customer);
        } 
        
        if (props.checkout && props.checkout.orderCode) {
            setCurrentSection('thankyou');
            props.onResetState();
        }

    }, [props])

    return (
        <div>
            <Header />
            {currentSection === 'checkout' ?
                <div>
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
                                                    <input type="radio" id="male" name="type_user" value="1" onChange={(e) => handleOptionChange(e)} />
                                                    <label for="nc"> New Customer</label><br />
                                                </div>
                                                <div className="col-sm-6">
                                                    <input type="radio" id="female" name="type_user" value="2" onChange={(e) => handleOptionChange(e)} />
                                                    <label for="ec"> Existing Customer</label><br />
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                        {customerForm === 1 ? <NewCustomerForm sendData={(data) => props.onSubmitForm(data, JSON.stringify(props.products.cartItems))} /> : <ExistingCustomerForm />}
                                    </div>
                                </div>
                                {customerInfo ? <CustomerInfo customerInfo={customerInfo} sendData={() => props.onSubmitForm(customerInfo, JSON.stringify(props.products.cartItems))} /> : null}
                            </div>
                            <div className="col-sm-6 col-md-6">
                                <hr className="offset-sm visible-sm" />
                                <Summary />
                            </div>
                        </div>
                    </div>
                </div>
            : <Thankyou customerInfo={ props.checkout.customerInfo.customer } orderCode={ props.checkout.orderCode } />}
        </div>
    )
}

const mapStateToProps = state => ({
    products: state.products,
    checkout: state.checkout
})

const mapDispatchToProps = dispatch => ({
    onSubmitForm: (item, products) => dispatch(addProductToCart(item, products)),
    onResetState: () => dispatch(resetState())
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);