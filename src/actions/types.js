//Dispatch types like constants to determine the flow
// Dispatch state are mentioned as below
//Auth Dispathc States

/*************************************************************** */
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'

//For login and logout
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAIL = 'LOGOUT_FAIL'

//For authentication status
export const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS'
export const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL'

/*************************************************************** */

//Loading user profile
//Profile dispatch states
export const LOAD_USER_PROFILE_SUCCESS = 'LOAD_USER_PROFILE_SUCCESS'
export const LOAD_USER_PROFILE_FAIL = 'LOAD_USER_PROFILE_FAIL'

//Profile update
export const UPDATE_USER_PROFILE_SUCCESS = 'UPDATE_USER_PROFILE_SUCCESS'
export const UPDATE_USER_PROFILE_FAIL = 'UPDATE_USER_PROFILE_FAIL'

//Delete User
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_FAIL = 'DELETE_USER_FAIL'




//SEND MESSAGE
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL'

//Feedback 
export const FEEDBACK_SEND_FAIL = 'FEEDBACK_SEND_FAIL'
export const FEEDBACK_SEND_SUCCESS = 'FEEDBACK_SEND_SUCCESS'

//email password reset mail
export const SEND_PASSWORD_RESET_MAIL_SUCCESS = 'SEND_PASSWORD_RESET_MAIL_SUCCESS'
export const SEND_PASSWORD_RESET_MAIL_FAIL= 'SEND_PASSWORD_RESET_MAIL_FAIL'

//password reset
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL'

//book appointment
export const BOOK_APPOINTMENT_SUCCESS = 'BOOK_APPOINTMENT_SUCCESS'
export const BOOK_APPOINTMENT_FAIL = 'BOOK_APPOINTMENT_FAIL'

//fetch appointments
export const FETCH_APPOINTMENTS_FAIL = 'FETCH_APPOINTMENTS_FAIL'
export const FETCH_APPOINTMENTS_SUCCESS = 'FETCH_APPOINTMENTS_SUCCESS'

//approve or reject action appointments
export const APPOINTMENT_ACTION_FAIL = 'APPOINTMENT_ACTION_FAIL'
export const APPOINTMENT_ACTION_SUCCESS = 'APPOINTMENT_ACTION_SUCCESS'
export const APPOINTMENT_ACTION_NONE = 'APPOINTMENT_ACTION_NONE'









