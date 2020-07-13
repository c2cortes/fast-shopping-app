import React from 'react';

const ExistingCustomerForm = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {};
        props.sendData(data);
    }

    return (
        <form className="join" onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row">
                    
                    <div className="col-sm-3">
                        <label>Email*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="email" value="" placeholder="Email" required="" className="form-control" /><br />
                    </div>
                    
                    <div className="col-sm-9"></div>
                    <div className="col-sm-3">
                        <button className="btn btn-primary btn-lg right">Lookup</button>    
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ExistingCustomerForm;