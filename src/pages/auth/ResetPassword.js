import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { resetPassword } from "../../actions/auth.js";
export const ResetPasswordComponent = ({ reset_pswd_status, reset_pswd_message, resetPassword, isAuthenticated }) => {

    const navigate = new useNavigate();

    const [formData, setFormData] = useState({
        password: '',
        password_confirmation: ''
    });


   


    //GANDU
    useEffect(() => {
        if (isAuthenticated) navigate('/dashboard')
    }, [isAuthenticated]);

    const { password, password_confirmation } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {

        e.preventDefault();
        console.log(formData);


        //then hit register action
        //login(username,password);
        resetPassword(formData);


    }

    const successLink = () => {

        return (
            <>
                <div class="alert alert-success alert-dismissible fade show m-2" role="alert">
                    <p> {reset_pswd_message}</p>
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
                    <p> {reset_pswd_message}</p>

                </div>
            </>
        )

    }

    return (
        <>
            <div className="container card m-5" >
                <h1>Reset Password</h1>
                <p>To schedule appointment</p>
                <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group mt-3">
                        <label htmlFor="email" className="form-label">
                            Password:
                        </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="password" className="form-label">
                            Confirm Password:
                        </label>
                        <input type="password"
                            className="form-control"
                            placeholder="Confirmation Password"
                            name="password_confirmation"
                            id="password_confirmation"
                            value={password_confirmation}
                            onChange={e => onChange(e)}
                            minLength='6'
                            required />
                    </div>
                    <button className="btn btn-primary mt-3" type='submit'>Submit</button>
                    {reset_pswd_status === 'success' ? successLink() : reset_pswd_status === "" ? <></> : failLink()}

                </form>
            </div>
        </>
    );

};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        reset_pswd_status: state.auth.reset_pswd_status,
        reset_pswd_message: state.auth.reset_pswd_message
    }
};

const ResetPassword = connect(mapStateToProps, { resetPassword })(ResetPasswordComponent);

export default ResetPassword;



