import axios from "axios";
import { BOOK_APPOINTMENT_FAIL,BOOK_APPOINTMENT_SUCCESS,
        FETCH_APPOINTMENTS_FAIL,FETCH_APPOINTMENTS_SUCCESS,
        APPOINTMENT_ACTION_FAIL,APPOINTMENT_ACTION_SUCCESS,APPOINTMENT_ACTION_NONE 
        } from "./types";
//REGISTER
export const bookappointment = (form)=>async dispatch => {
    
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
        
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/bookappointment`,body,config)

        if(res.data.error) {
            dispatch({
                type:BOOK_APPOINTMENT_FAIL,
                payload:res.data
            })
        }
        else {
            console.log("ASDFGHJKL");
            console.log(res);
            
            dispatch({
                type:BOOK_APPOINTMENT_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {

        if (error.response) {
            const err = error.response;
            console.log(err.data);
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response)
            console.log('Error  status:', error.response.status);
            console.log('Error data:', error.response.data);
            console.log('Error headers:', error.response.headers);
            dispatch({
                type:BOOK_APPOINTMENT_FAIL,
                payload:err.data
            })
          } else if (error.request) {
            dispatch({
                type:BOOK_APPOINTMENT_FAIL,
                payload:{"status":"failed","message":"No response received"}
            })
          } else {
            // Something happened in setting up the request that triggered an Error
           dispatch({
                type:BOOK_APPOINTMENT_FAIL,
                payload:{"status":"failed","message":"Unable to book appointment"}
            })
          }


       
    }
}

//admin fetch requests appointments
export const fetchAppointments = ()=>async dispatch => {
    console.log("FETCHING LISTR");
   
    let config = {};
    try {
         config = {
            headers : {
                'Accept':'application/json',
                'Content-Type':'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
                // 'X-CSRFToken':Cookies.get('csrftoken') no need when get request is made
            }
        };
    } catch (error) {
        console.error(error)
    }

    try {


        console.log("FETCHING REQEUST");
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/fetchappointments`,config)
        console.log(res.data);
        if(res.data.error) {
            dispatch({
                type:FETCH_APPOINTMENTS_FAIL,
                payload:res.data
            })
        }
        else {
            console.log(res);
            const response = res.data;
            dispatch({
                type:FETCH_APPOINTMENTS_SUCCESS,
                payload:response
            })
        }

    } catch (error) {
        console.error(error)
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
                type:FETCH_APPOINTMENTS_FAIL,
                payload:err.data
            })
          } else if (error.request) {
            dispatch({
                type:FETCH_APPOINTMENTS_FAIL,
                payload:{"status":"failed","message":"No response received"}
            })
          } else {
            // Something happened in setting up the request that triggered an Error
           dispatch({
                type:FETCH_APPOINTMENTS_FAIL,
                payload:{"status":"failed","message":"Unable to fetch appointment"}
            })
          }
       
    }
}

//Approve or reject appointment request
export const appointmentAction = (form,action)=>async dispatch => {
    const config = {
        headers : {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            // 'X-CSRFToken':Cookies.get('csrftoken') no need when get request is made
        }
    };
    
    form = {...form,"action":action}
    console.log(form)
    const body = JSON.stringify(form);
 
    try {
       
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/appointment`,body,config)

        if(res.data.error) {
            dispatch({
                type:APPOINTMENT_ACTION_FAIL,
                payload:res.data
            })
        }
        else {
            console.log("ACT APPOINTMENT");
            console.log(res);
            
            dispatch({
                type:APPOINTMENT_ACTION_SUCCESS,
                payload:res.data
            })
        }

    } catch (error) {

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
                type:APPOINTMENT_ACTION_FAIL,
                payload:err.data
            })
          } else if (error.request) {
            dispatch({
                type:APPOINTMENT_ACTION_FAIL,
                payload:{"status":"failed","message":"No response received"}
            })
          } else {
            // Something happened in setting up the request that triggered an Error
           dispatch({
                type:APPOINTMENT_ACTION_FAIL,
                payload:{"status":"failed","message":"Unable to book appointment"}
            })
          }


       
    }
}



