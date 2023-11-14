import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";

import { fetchAppointments } from "../actions/dashboardactivity.js";
import { appointmentAction } from "../actions/dashboardactivity.js";
const AdminDashboardComponent = ({ isAuthenticated, dashboard_message, dashboard_status, dashboard_appointment_list, fetchAppointments,appointmentAction }) => {

    const [forms, setForms] = useState([]);

   

    useEffect(() => {
        fetchAppointments()
        if (Array.isArray(dashboard_appointment_list)) {
            setForms(dashboard_appointment_list);
        }
        
        setForms(dashboard_appointment_list)

    }, [dashboard_status]);

    const onSubmit = (e,apmt) => {
        e.preventDefault();
        console.log(forms);

        const action = e.nativeEvent.submitter.value;
        console.log(action)
    
        setForms((elem) => elem.filter(item => item !== apmt))

        console.log(apmt)
        appointmentAction(apmt,action)
        //then hit register action
        //login(username,password);
    }

   

    const successLink = () => {

        return (
            <>
                <div class="alert alert-success alert-dismissible fade show m-2" role="alert">
                    {/* <p> {message}</p> */}
                    
                    {dashboard_message}

                </div>
            </>
        )

    }
    const failLink = () => {

        return (
            <>
                <div class="alert alert-warning alert-dismissible fade show m-2" role="alert">
                    {dashboard_message}
                </div>
            </>
        )

    }


    return (
        <div className="container card border-0" >
            <div class="card text-center">

                <div class="card-body">
                    <h5 class="card-title">Appointments</h5>
                    {dashboard_message}
                </div>

            </div>








            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Cateogry</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         forms.map((appElem,index) => {
                            return (
                                <>

                                    <tr>
                                        <td>{appElem.usertype_id === 1 ? "Student" : appElem.usertype_id === 2 ? "Faculty" : appElem.usertype_id === 3 ? "Guest" : ""}</td>
                                        <td>{appElem.purpose}</td>
                                        <td>{`${new Date(appElem.date).getDate()}-${new Date(appElem.date).getMonth()}-${new Date(appElem.date).getFullYear()}`}</td>
                                        <td>{`${new Date(appElem.date).getHours()}:${new Date(appElem.date).getMinutes()}`}</td>
                                        <td>{appElem.slot_time}</td>
                                        {appElem.usertype_id === 1? <></>:appElem.usertype_id === 2?<></>:appElem.request_status ==1?
                                        <>
                                            <td>
                                            <form key={index} onSubmit={e => onSubmit(e, appElem)}>
                                                <button className="btn btn-outline-danger" value="reject" type="submit">Reject</button>
                                            </form>
                                        </td> 
                                        <td>
                                            <form key={index} onSubmit={e => onSubmit(e, appElem)}>
                                            <button className="btn btn-outline-primary" value="approve" type="submit">Approve</button>                                            </form>
                                        </td>
                                        </>
                                        :<></>
                                        }
                                        
                                    </tr>

                                </>
                            );
                        })
                    }
                </tbody>
            </table>

            {dashboard_status==="success"?successLink():failLink()}


            {/* {dashboard_status === 'success' ? successLink() : dashboard_status === "" ? <></> : failLink()} */}
        </div>
    );

};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.dashboardactivity.isAuthenticated,
        dashboard_status: state.dashboardactivity.dashboard_status,
        dashboard_message: state.dashboardactivity.dashboard_message,
        dashboard_appointment_list: state.dashboardactivity.dashboard_appointment_list,
    }
};

const AdminDashboard = connect(mapStateToProps, { appointmentAction,fetchAppointments })(AdminDashboardComponent);

export default AdminDashboard;



