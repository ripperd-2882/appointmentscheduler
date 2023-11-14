import axios from "axios";
import { REGISTER_FAIL,REGISTER_SUCCESS,
        LOGIN_FAIL,LOGIN_SUCCESS,
        LOGOUT_SUCCESS,LOGOUT_FAIL,
        SEND_PASSWORD_RESET_MAIL_FAIL,
        SEND_PASSWORD_RESET_MAIL_SUCCESS,
        RESET_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS } from "./types";
import { load_user } from "./profile";
//REGISTER
export const register = (form)=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            // 'X-CSRFToken':Cookies.get('csrftoken') no need when get request is made
        }
    };
    const body = JSON.stringify(form);

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/register`,body,config)

        if(res.data.error) {
            dispatch({
                type:REGISTER_FAIL,
                payload:res.data
            })
        }
        else {
            console.log(res);
            
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {
        dispatch({
            type:REGISTER_FAIL,
            payload:{"status":"failed","message":"Unable to register"}

        })
    }
}

//LOGIN

export const login = (form) => async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    };
    
    const body = JSON.stringify(form)
  
    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`,body,config)
        
        if(res.data.error) {
            dispatch({
                type:LOGIN_FAIL,
                payload:res.data
            })
        }
        else {
            
            localStorage.setItem("token",res.data.token);
              dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data
            });
            
            //load the user action dispatch after this
            //dispatch(load_user())
        }

    } catch (error) {
        console.log("ERROR IN LOGIN :")

        if (error.response) {
            const err = error.response;
            console.log(err.data);
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response)
            console.log('Error status:', error.response.status);
            console.log('Error data:', error.response.data);
            console.log('Error headers:', error.response.headers);
            dispatch({
                type:LOGIN_FAIL,
                payload:err.data
            })
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received');
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error message:', error.message);
          }

       
    }

}

//LOGOUT

export const logout = () => async dispatch => {
    
    try {
        localStorage.clear();
        
            
    dispatch({
                type:LOGOUT_SUCCESS,
                payload:{"status":"success","message":"Successfully Logged Out"}
            });
            
            //load the user action dispatch after this
            //dispatch(load_user())
        

    } catch (error) {
        // dispatch({
        //     type:LOGIN_FAIL
        // })
    }

}

//send password reset email

export const sendPasswordResetEmail = (form) => async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    };
    
    const body = JSON.stringify(form)

    try {
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/send-reset-password-email`,body,config)
        console.log("111");
        console.log(res)
        
        if(res.data.error) {
            dispatch({
                type:SEND_PASSWORD_RESET_MAIL_FAIL,
                payload:res.data
            })
        }
        else {
            
            localStorage.setItem("token",res.data.token);
              dispatch({
                type:SEND_PASSWORD_RESET_MAIL_SUCCESS,
                payload:res.data
            });
            
            //load the user action dispatch after this
            //dispatch(load_user())
        }

    } catch (error) {
        dispatch({
            type:SEND_PASSWORD_RESET_MAIL_FAIL,
            payload:{"status":"failed","message":"Unable to send mail"}

        })
    }

}

//reset password
//send password reset email

export const resetPassword = (form) => async dispatch => {
    const currentURL = window.location.href;
    console.log(currentURL);
    const urlList = currentURL.split('/');
    console.log(urlList) 
    const token =  urlList[urlList.length-1];
    const id = urlList[urlList.length-2];
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    };
    
    const body = JSON.stringify(form)
    
    try {
        
    

    const res = await axios.post(`${process.env.REACT_APP_API_URL}/reset-password/${id}/${token}`,body,config)
       
       console.log("222");
        console.log(res)
        
        if(res.data.error) {
            dispatch({
                type:RESET_PASSWORD_FAIL,
                payload:res.data
            })
        }
        else {
            
            
              dispatch({
                type:RESET_PASSWORD_SUCCESS,
                payload:res.data
            });
            
            //load the user action dispatch after this
            //dispatch(load_user())
        }

    } catch (error) {
        dispatch({
            type:RESET_PASSWORD_FAIL,
            payload:{"status":"failed","message":"Unable to reset password"}

        })
    }

}
