import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    AUTHENTICATED_FAIL,
    AUTHENTICATED_SUCCESS,
    SEND_PASSWORD_RESET_MAIL_FAIL,
    SEND_PASSWORD_RESET_MAIL_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS
} from '../actions/types'

const initialState = {
     isAuthenticated: null,// as after authentication only it is being accessed, so no need here
     curr_usertype_id:0,
     status:'',
     message:'',
     reset_pswd_status:'',
     reset_pswd_message:'',
     reset_pswd_mail_status:'',
     reset_pswd_mail_message:'',
}


export default function (state=initialState, action) {

    const { type,payload } = action;
    switch (type) {
        case AUTHENTICATED_SUCCESS: return {
            ...state,
                 isAuthenticated:payload,
                 status:payload.status,
                 message:payload.message
        }
        case AUTHENTICATED_FAIL:
            return {
                 ...state,
                 isAuthenticated:payload,
                 status:payload.status,
                 message:payload.message
             }
             
        case REGISTER_SUCCESS: 
            return {
                ...state,
                isAuthenticated: false,
                status:payload.status,
                 message:payload.message
            }
    
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated:true,
                username: payload,
                status:payload.status,
                message:payload.message,
                curr_usertype_id:payload.usertype_id,
            }    
        
        case LOGOUT_SUCCESS: return {
            ...state,
            isAuthenticated:false,
            status:payload.status,
            message:payload.message
        }
      
        
        case REGISTER_FAIL: return {
            ...state,
            isAuthenticated:false,
            status:payload.status,
            message:payload.message
        }
        case LOGIN_FAIL: console.log("LOGIN FAIL : "+payload) 
        return {
            ...state,
            isAuthenticated:false,
            status:payload.status,
            message:payload.message
        } 
        case SEND_PASSWORD_RESET_MAIL_FAIL: return {
            ...state,
            isAuthenticated:false,
            reset_pswd_mail_status:payload.status,
            reset_pswd_mail_message:payload.message
        }
        case SEND_PASSWORD_RESET_MAIL_SUCCESS: return {
            ...state,
            isAuthenticated:false,
            reset_pswd_mail_status:payload.status,
            reset_pswd_mail_message:payload.message
        }     
        case RESET_PASSWORD_SUCCESS: return {
            ...state,
            isAuthenticated:false,
            reset_pswd_status:payload.status,
            reset_pswd_message:payload.message
        }  
        case RESET_PASSWORD_FAIL: return {
            ...state,
            isAuthenticated:false,
            reset_pswd_status:payload.status,
            reset_pswd_message:payload.message
        }        
        default: return state    

}

}