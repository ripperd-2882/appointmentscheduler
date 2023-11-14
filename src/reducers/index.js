import {combineReducers} from 'redux';
import auth from './auth'
import dashboardactivity from './dashboardactivity';
export default combineReducers({
    auth,
    dashboardactivity,
   
})