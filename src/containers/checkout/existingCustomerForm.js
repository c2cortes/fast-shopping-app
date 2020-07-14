import React, { useState } from 'react';
import { connect } from 'react-redux';

import { validateExistingCustomer } from './thunks';

const ExistingCustomerForm = (props) => {

    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmitForm(email);
    }

    return (
        <form className="join" onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <label>Email*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="email" value={ email } placeholder="Email" required="" className="form-control" 
                            onChange={ (e) => setEmail(e.target.value) }
                        /><br />
                    </div>
                    <div className="col-sm-9"></div>
                    <div className="col-sm-3">
                        <button className="btn btn-primary btn-lg right">Lookup</button>
                    </div>
                    <div className="col-sm-12 customer-info-message">
                        { props.checkout.customerInfoMessage }
                    </div>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    checkout: state.checkout
})

const mapDispatchToProps = dispatch => ({
    onSubmitForm: (email) => dispatch(validateExistingCustomer(email))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCustomerForm);