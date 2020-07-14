import React from 'react';
import { Link } from 'react-router-dom';

const Thankyou = (props) => {
    return (
        <div className="container-fluid">
            <div className="row thankyou-wrapper">
                <div className="col-sm-12">
                    <h2>Thanks for your purchase</h2>
                </div>
                
                <div className="col-sm-12">
                    <span>
                        {props.customerInfo ? props.customerInfo.name : ''}, we have created your order #{props.orderCode}, Your items will be soon at your door.
                    </span>
                </div>

                <div className="col-sm-5"></div>
                <div className="col-sm-2 btn-start-again">
                    <Link to={'/'} className="cart-icon">			
                        <div className="btn btn-primary btn-lg justify">Start Again</div>
                    </Link>
                </div>
                <div className="col-sm-5"></div>
            </div>
        </div>
    )
}

export default Thankyou;