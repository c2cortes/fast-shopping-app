import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getSummaryTotal} from './thunks';

const CartSummary = props => {

    const [total, setTotal] = useState(0);

    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <h2 className="no-margin">Summary</h2>
                <hr className="offset-md" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">
                            <p>Subtotal ({props.products.cartItems.length} items)</p>
                        </div>
                        <div className="col-xs-6">
                            <p><b>${props.products.summaryTotal}</b></p>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">
                            <h3 className="no-margin">Total sum</h3>
                        </div>
                        <div className="col-xs-6">
                            <h3 className="no-margin">${props.products.summaryTotal}</h3>
                        </div>
                    </div>
                </div>
                <hr className="offset-md" />
                <Link to={'/checkout'} className="btn btn-primary btn-lg justify">
                    <i className="ion-android-checkbox-outline"></i>&nbsp;&nbsp; Checkout order
									</Link>
                <hr className="offset-md" />

                <p>Pay your order in the most convenient way</p>
                <div className="payment-icons">
                    <img src="../assets/img/payments/icon-paypal.svg" alt="paypal" />
                    <img src="../assets/img/payments/icon-visa.svg" alt="visa" />
                    <img src="../assets/img/payments/icon-mc.svg" alt="mc" />
                    <img src="../assets/img/payments/icon-discover.svg" alt="discover" />
                    <img src="../assets/img/payments/icon-ae.svg" alt="ae" />
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => ({
    getSummaryTotal: () => dispatch(getSummaryTotal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);