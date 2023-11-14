import React,{useEffect, useState} from "react";
import { useNavigate ,Link} from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import ForgotPassword from "./ForgotPassword";
 const LoginComponent = ({login,isAuthenticated,message,status,curr_usertype_id})=> {

    const navigate =  useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:'',
    });

    useEffect(()=>{
      
        //if(isAuthenticated && curr_usertype_id == 4) navigate('/admindashboard')
        
        if(isAuthenticated ){
            if(curr_usertype_id == 4) {
                navigate('/admindashboard')
               
            }//console.log("ADMIN HERE");
            else navigate('/dashboard')//console.log("NON-ADMIN");
            //  navigate('/admindashboard')
            // else navigate('/dashboard')
        } else{

        }
        
        // else navigate('/dashboard')
    },[isAuthenticated,curr_usertype_id]);
    
    const {email,password} = formData;
    
    const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit = e => {
       
        e.preventDefault();
        console.log(formData);
        
        if(password.length >= 8) {   
            //then hit register action
            //login(username,password);
            login(formData);
        }

    }

    const successLink = () => {

        return (
            <>
                <div class="alert alert-success alert-dismissible fade show m-2" role="alert">
                    <p> {message}</p>
                    <h5>Redirecting..</h5>
                    

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

    let styleCard = {
        maxWidth:'540px'
    }
    return (
        <div className="container card mt-5 shadow p-3 mb-5 bg-white rounded" style={styleCard}>
            <h1>Sign In</h1>
            <p>To schedule appointment</p>
            <form onSubmit={e=>onSubmit(e)}>
                
                <div className="form-group mt-3">
                    <label htmlFor="email" className="form-label">
                        Username:
                    </label>
                    <input type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name="email"
                        id="email" 
                        value={email}
                        onChange={e => onChange(e)} 
                        required/>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input type="password" 
                        className="form-control" 
                        placeholder="Password" 
                        name="password"
                        id="password" 
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6' 
                        required/>
                </div>
                <button className="btn btn-primary mt-3" type='submit'>Sign In</button>

            </form>
            <ForgotPassword />
            <p className="mt-3">Don't have an account? <Link  to='/register'>Sign Up</Link></p>
            {status === 'success' ? successLink() : status === "" ? <></> : failLink()}
        </div>
    );

};

const mapStateToProps = (state) => {
    console.log(state);
    return{
    isAuthenticated:state.auth.isAuthenticated,
    status:state.auth.status,
    message:state.auth.message,
    curr_usertype_id:state.auth.curr_usertype_id,
    }
};

const Login = connect(mapStateToProps,{login})(LoginComponent);

export default Login;



