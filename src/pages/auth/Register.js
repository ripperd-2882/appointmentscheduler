import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

const RegisterComponent = ({isAuthenticated,status,message, register}) => {



    const navigate = new useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        name: '',
        password: '',
        password_confirmation: '',
        usertype_id: 0,
        aadhar_no: '',
        address: '',
        contact_no: '',
        roll_no:''
    })

    // const [accountCreatedStatus, setAccountCreatedStatus] = useState(false)

    // if(status === "success") setAccountCreatedStatus(true)

    const { roll_no,email,name, password, password_confirmation, usertype_id, aadhar_no, address, contact_no } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    //submit event
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        if (password === password_confirmation && password.length >= 8) {
            //then hit register action
            // await register(form);
            //setAccountCreatedStatus(true);
            formData.usertype_id = parseInt(formData.usertype_id);
            register(formData)
        }

    }

    const handleTypeChange =  (e) => {
        
        // const element = document.getElementById("guestInfo");
        console.log(e.target.value);
        console.log(usertype_id);
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value  }))
        console.log(formData.usertype_id);
        // if(usertype_id === 3) element.style.visibility = true;
        // else element.style.visibility = true;
    }
    //GANDU
    useEffect(()=>{
        if (isAuthenticated)
         navigate('/dashboard')
    
    },[isAuthenticated]);

    if (status === "success")
        return navigate('/login')
        let styleCard = {
            maxWidth:'540px'
        }
    //NITC INFO
    const nitcIdInfo = () => {
        return (
            <>
                <div className="form-group mt-3 " style={styleCard}>
                    <input type="text"
                        className="form-control"
                        placeholder="Institute ID"
                        name="roll_no"
                        id="roll_no"
                        value={roll_no}
                        onChange={e => onChange(e)}
                        required />
                </div>
            </>
        );
    }

    //GUEST INFO
    const guestRegisterInfo = () => {
        return (
            <>
                <div className="form-group mt-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Aadhaar Number"
                        name="aadhar_no"
                        id="aadhar_no"
                        value={aadhar_no}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group mt-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Contact Number"
                        name="contact_no"
                        id="contact_no"
                        value={contact_no}
                        onChange={e => onChange(e)}
                        required />
                </div>
                <div className="form-group mt-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Address"
                        name="address"
                        id="address"
                        value={address}
                        onChange={e => onChange(e)}
                        required />
                </div>
            </>
        );
    }

    const successLink = () => {

        return (
            <>
                <div class="alert alert-success alert-dismissible fade show m-2" role="alert">
                    <p> {message}</p>
                    <h5>Redirecting..</h5>
                    {setTimeout(() => {
                        navigate('/login')
                    }, 3000)}

                </div>
            </>
        )

    }
    const failLink = () => {

        return (
            <>
                <div class="alert alert-warning alert-dismissible fade show m-2" role="alert">
                    <p> {message}</p>

                </div>
            </>
        )

    }


    return (
        <div className="col-sm-6 card container mt-5">
            <div className="card-body">
                <h1 className="card-title">Registration</h1>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}



                <form onSubmit={e => onSubmit(e)}>

                    <div className=" form-group mt-3">


                        <select name="usertype_id" value={usertype_id} onChange={e => handleTypeChange(e)} className="form-select mb-3" aria-label="Default select example">
                            <option value='0' selected>Select Category</option>
                            <option value="1">Student</option>
                            <option value="2">Faculty</option>
                            <option value="3">Guest</option>
                        </select>

                        {/* <label htmlFor="name" className="form-label">
                        name:
                    </label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            id="name"
                            value={name}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className="form-group mt-3">
                        {/* <label htmlFor="password" className="form-label">
                        Password:
                    </label> */}
                        <input type="email"
                            className="form-control"
                            placeholder="Email ID"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => onChange(e)}
                            
                            required />
                    </div>
                    {/* <div id="guestInfo" style={{visibility: 'hidden'}}> */}
                        {formData.usertype_id == 3 ? guestRegisterInfo() : nitcIdInfo()}
                        
                    {/* </div> */}
                    <div className="form-group mt-3">
                        {/* <label htmlFor="password" className="form-label">
                        Password:
                    </label> */}
                        <input type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => onChange(e)}
                            minLength='8'
                            required />
                    </div>
                    <div className="form-group mt-3">
                        {/* <label htmlFor="password_confirmation" className="form-label">
                        Confirm Password:
                    </label> */}
                        <input type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            name="password_confirmation"
                            id="password_confirmation"
                            value={password_confirmation}
                            onChange={e => onChange(e)}
                            minLength='8'
                            required />
                    </div>
                    <button className="btn btn-primary mt-3" type='submit'>Register</button>
                </form>
                <p className="mt-3">Already have an account? <Link exact to='/login'>Sign In</Link></p>
            </div>
            {status === 'success' ? successLink() : status === "" ? <></> : failLink()}

        </div>
    );

};

// const mapStateToProps = state => ({
//     isAuthenticated:state.auth.isAuthenticated,
//     status:state.status,
//     message:state.message
// });
const mapStateToProps = (state) => {
    console.log(state);
    return{
    isAuthenticated:state.auth.isAuthenticated,
    status:state.auth.status,
    message:state.auth.message
    }
};

const Register = connect(mapStateToProps,{register})(RegisterComponent);

export default Register;

