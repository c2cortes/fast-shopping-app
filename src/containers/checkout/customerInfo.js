import React, { useState } from 'react';

const CustomerInfo = (props) => {
    console.log('props =>=>=>=> CustomerInfo', props);
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

                <div className="col-sm-12 btn-confirm-order-existing-customer">
                    <button className="btn btn-primary btn-lg justify"><i className="ion-compose"></i>&nbsp;&nbsp; Confirm order</button>
                </div>
            </div>
        </div>
    )
}

export default CustomerInfo;