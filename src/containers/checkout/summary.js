import React from 'react';

const Summary = () => {
    return (
        <div className="panel panel-default">
            <div className="panel-body">
                <h2 className="no-margin">Summary</h2>
                <hr className="offset-md" />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6">
                            <p>Subtotal (7 items)</p>
                            <p>Discount</p>
                            <p>Delivery</p>
                        </div>
                        <div className="col-xs-6">
                            <p><b>$1499</b></p>
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
                            <h3 className="no-margin">$1499</h3>
                        </div>
                    </div>
                </div>
                <hr className="offset-md" />
            </div>
        </div>
    )
}

export default Summary;