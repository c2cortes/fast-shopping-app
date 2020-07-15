import React from 'react';
import { connect } from 'react-redux';
import {getSummaryTotal} from '../products/thunks';

const Summary = props => {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <h2 className="no-margin">Summary</h2>
                <hr className="offset-md" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">
                            <p>Subtotal ({props.products.cartItems.length} items)</p>
                            <p>Discount</p>
                            <p>Delivery</p>
                        </div>
                        <div className="col-xs-6">
                            <p><b>${props.products.summaryTotal}</b></p>
                            <p><b>$0</b></p>
                            <p><b>$0</b></p>
                        </div>
                    </div>
                </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Summary);