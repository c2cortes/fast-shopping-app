import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onResetCustomerInfo } from './thunks';

const CustomerInfo = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h3>Welcome back, {props.customerInfo ? props.customerInfo.name : ''}</h3>
                </div>
                <div className="col-sm-12">
                    <span>ID: {props.customerInfo ? props.customerInfo.identification : ''}</span>
                </div>
                <div className="col-sm-12">
                    <span>Phone: {props.customerInfo ? props.customerInfo.phone : ''}</span>
                </div>
                <div className="col-sm-12">
                    <span>Email: {props.customerInfo ? props.customerInfo.email : ''}</span>
                </div>
                
                <div className="col-sm-12 lookup-again">
                    <Link to={'#'} onClick={ () => props.onResetCustomerInfo() } className="cart-icon">			
                        Not {props.customerInfo ? props.customerInfo.name : ''}? Lookup again
                    </Link>
                </div>

                <div className="col-sm-12 btn-confirm-order-existing-customer">
                    <button onClick={ () => props.sendData() } className="btn btn-primary btn-lg justify"><i className="ion-compose"></i>&nbsp;&nbsp; Confirm order</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    onResetCustomerInfo: () => dispatch(onResetCustomerInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo);