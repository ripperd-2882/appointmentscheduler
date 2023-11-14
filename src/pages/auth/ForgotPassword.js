import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { sendPasswordResetEmail } from "../../actions/auth";

export const ForgotPasswordComponent = ({ reset_pswd_mail_status, reset_pswd_mail_message, sendPasswordResetEmail, isAuthenticated }) => {

    const navigate = new useNavigate();

    const [formData, setFormData] = useState({
        email: '',
    });
    const [hide, setHide] = useState(true);

    
  
    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {

        e.preventDefault();
        console.log(formData);


        //then hit register action
        //login(username,password);
        sendPasswordResetEmail(formData);


    }

    const successLink = () => {

        return (
            <>
                <div class="alert alert-success alert-dismissible fade show m-2" role="alert">
                    <p> {reset_pswd_mail_message}</p>
                    
                </div>
            </>
        )

    }
    const failLink = () => {

        return (
            <>
                <div class="alert alert-warning alert-dismissible fade show m-2" role="alert">
                    <p> {reset_pswd_mail_message}</p>
                    
                </div>
            </>
        )

    }

    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <Link data-bs-toggle="modal" data-bs-target="#exampleModal">
                Forgot Password?
            </Link>

            {/* <!-- Modal --> */}
            <form onSubmit={e => onSubmit(e)} class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Forgot Password</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="p-3">

                                <div className="form-group mt-3">

                                    <input type="email"
                                        className="form-control"
                                        placeholder="Enter Email ID"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={e => onChange(e)}
                                        required />
                                </div>



                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button className="btn btn-primary" type='submit'>Submit</button>
                            <br />
                            
                        </div>
                        {reset_pswd_mail_status === 'success' ? successLink() : reset_pswd_mail_status === ""?<></>:failLink()}
                    </div>
                    
                </div>
            </form>
        </>
    );

};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        reset_pswd_mail_status: state.auth.reset_pswd_mail_status,
        reset_pswd_mail_message: state.auth.reset_pswd_mail_message
    }
};

const ForgotPassword = connect(mapStateToProps, { sendPasswordResetEmail })(ForgotPasswordComponent);

export default ForgotPassword;



