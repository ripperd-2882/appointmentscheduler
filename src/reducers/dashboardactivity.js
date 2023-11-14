import {
   BOOK_APPOINTMENT_FAIL,
   BOOK_APPOINTMENT_SUCCESS,
   FETCH_APPOINTMENTS_FAIL,
   FETCH_APPOINTMENTS_SUCCESS,
   APPOINTMENT_ACTION_SUCCESS,
   APPOINTMENT_ACTION_FAIL,
   APPOINTMENT_ACTION_NONE,
} from '../actions/types'

const initialState = {
    //  isAuthenticated: false,// as after authentication only it is being accessed, so no need here 
    
    dashboard_status:'',
     dashboard_message:'',
     dashboard_appointment_list:[],
     
}


export default function (state=initialState, action) {

    const { type,payload } = action;
    switch (type) {
        case BOOK_APPOINTMENT_SUCCESS: return {
            ...state,
            dashboard_status:payload.status,
            dashboard_message:payload.message
        }
        case BOOK_APPOINTMENT_FAIL: return {
            ...state,
            dashboard_status:payload.status,
            dashboard_message:payload.message
        }
        case FETCH_APPOINTMENTS_FAIL: return {
            ...state,
            dashboard_status:payload.status,
            dashboard_message:payload.message,
            
        }
        case FETCH_APPOINTMENTS_SUCCESS: console.log("PAYLOAD : "+payload) 
        return {
            ...state,
            dashboard_status:payload.status,
            dashboard_message:payload.message,
            dashboard_appointment_list:payload.appointments,
        }
        case APPOINTMENT_ACTION_FAIL:  
        return {
            ...state,
            dashboard_status:payload.status,
            dashboard_message:payload.message,
            
        }
        case APPOINTMENT_ACTION_SUCCESS: 
        return {
            ...state,
            dashboard_status:payload.status,
            dashboard_message:payload.message,
           
        }

        default: return state    

}

}