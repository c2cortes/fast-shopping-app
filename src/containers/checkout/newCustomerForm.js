import React, {useState} from 'react';

const NewCustomerForm = (props) => {

    const [name, setName] = useState('');
    const [identification, setIdentification] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const validateEmail = mail => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return (true)
        }
        return (false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(name == ""){
            alert('Name is required');
        } else if(identification == ""){
            alert('ID is required');
        } else if(address == ""){
            alert('Address is required');
        } else if(phone == ""){
            alert('Phone is required');
        } else if(email == ""){
            alert('Email is required');
        } else if(!validateEmail(email)){
            alert('Email is invalid');
        } else {
            const data = {
                name,
                identification,
                address,
                phone,
                email
            };
            props.sendData(data);
        }
    }

    return (
        <form className="join" onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3">
                        <label>Full Name*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="name" value="" placeholder="Full Name" required="" className="form-control" 
                            value={name} onChange={ (e) => setName(e.target.value) }
                        />
                        <br />
                    </div>
                    <div className="col-sm-3">
                        <label>ID*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="identification" value="" placeholder="ID" required="" className="form-control" 
                            value={identification} onChange={ (e) => setIdentification(e.target.value) }
                        /><br />
                    </div>
                    <div className="col-sm-3">
                        <label>Address*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="address" value="" placeholder="Address" required="" className="form-control" 
                            value={address} onChange={ (e) => setAddress(e.target.value) }
                        /><br />
                    </div>
                    <div className="col-sm-3">
                        <label>Phone*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="phone" value="" placeholder="Phone" required="" className="form-control" 
                            value={phone} onChange={ (e) => setPhone(e.target.value) }
                        /><br />
                    </div>
                    <div className="col-sm-3">
                        <label>Email*</label><br />
                    </div>
                    <div className="col-sm-9">
                        <input type="text" name="email" value="" placeholder="Email" required="" className="form-control" 
                            value={email} onChange={ (e) => setEmail(e.target.value) }
                        /><br />
                    </div>
                    <div className="col-sm-12">
                        <button className="btn btn-primary btn-lg justify"><i className="ion-compose"></i>&nbsp;&nbsp; Confirm order</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default NewCustomerForm;