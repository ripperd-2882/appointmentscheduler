import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bookappointment } from "../actions/dashboardactivity";

const CalendarTComponent = ({ isAuthenticated, curr_usertype_id, dashboard_status, dashboard_message,bookappointment }) => {

    const navigate = new useNavigate();
    const today = new Date();
    const [formData, setFormData] = useState({
        purpose: '',
        date: "",
        slot_time: '',
        emergency_status: false,
        usertype_id: curr_usertype_id,
        time:"08:00"
       
    })

    const { purpose, date, slot_time, emergency_status, usertype_id,time } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    //submit event
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const timeSplit = time.split(":");
        const hours = parseInt(timeSplit[0]);
        const minutes = parseInt(timeSplit[1]); 
        const eventDate = new Date(date);
        const eventTimestamp = new Date(eventDate.getFullYear(),eventDate.getMonth(),eventDate.getDate(),hours,minutes);
        setFormData({ ...formData, date: eventTimestamp});
        //then hit register action
        // await register(form);
        //setAccountCreatedStatus(true);
        // formData.usertype_id = parseInt(formData.usertype_id);
        //register(formData)
        bookappointment(formData);

    }






    //emergency checkbox
    const emergencyCheckBox = () => {
        return (
            <>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value={emergency_status} id="emergency_status" name="emergency_status" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Emergency
                    </label>
                </div>
            </>
        );
    }


    const successLink = () => {

        return (
            <>
                <div class="alert alert-success alert-dismissible fade show m-2" role="alert">
                    <p> {dashboard_message}</p>
                    <h5>Redirecting..</h5>
                   

                </div>
            </>
        )

    }
    const failLink = () => {

        return (
            <>
                <div class="alert alert-warning alert-dismissible fade show m-2" role="alert">
                    <p> {dashboard_message}</p>

                </div>
            </>
        )

    }



    return (
        <div className="col-sm-6 card container mt-5">
            <div className="card-body">
                <h1 className="card-title">Appointment Booking</h1>
                {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}



                <form onSubmit={e => onSubmit(e)}>

                    <div className="form-group mt-3 ">
                        {/* <label htmlFor="password_confirmation" className="form-label">
                        Confirm Password:
                    </label> */}
                        {/* <label class="control-label" for="date">Date</label> */}
                        <input className="form-control" value={date} id="date" name="date" onChange={e => { onChange(e) }} placeholder="MM/DD/YYY" type="date" />
                    </div>
                    <div className="form-group mt-3 ">
                        <label for="time">Select a time:</label>
                        <input className="form-control"  onChange={e => onChange(e)} value={time} type="time" id="time" name="time"/>
                            {/* <select name="usertype_id" value={usertype_id} onChange={e => handleTypeChange(e)} className="form-select mb-3" aria-label="Default select example">
                            
                            {time_slots.map(time=>{
                                return(
                                    <>
                                    <option value={time}>{time}</option>
                                    </>
                                )
                            })}
                            
                          
                        </select> */}
                    </div>
                    <div className=" form-group mt-3">

                        {/* <label htmlFor="name" className="form-label">
                        name:
                    </label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Purpose"
                            name="purpose"
                            id="purpose"
                            value={purpose}
                            onChange={e => onChange(e)}
                            required />
                    </div>
                    <div className="form-group mt-3">
                        {/* <label htmlFor="password" className="form-label">
                        Password:
                    </label> */}
                        <input type="text"
                            className="form-control"
                            placeholder="Duration In Minutes"
                            name="slot_time"
                            id="slot_time"
                            value={slot_time}
                            onChange={e => onChange(e)}

                            required />
                    </div>
                    {/* <div id="guestInfo" style={{visibility: 'hidden'}}> */}
                    {usertype_id == 1 || usertype_id == 2 ? emergencyCheckBox() : <></>}

                    {/* </div> */}
                    <div className="form-group mt-3">
                        {/* <label htmlFor="password" className="form-label">
                        Password:
                    </label> */}

                    </div>

                    <button className="btn btn-primary mt-3" type='submit'>Book Appointment</button>
                </form>
            </div>
            {dashboard_status === 'success' ? successLink() : dashboard_status === "" ? <></> : failLink()}
     
        </div>
    );

};

// const mapStateToProps = state => ({
//     isAuthenticated:state.auth.isAuthenticated,
//     status:state.status,
//     message:state.message
// });
const mapStateToProps = (state) => {
    console.log(state);
    return {
        isAuthenticated: state.auth.isAuthenticated,
        dashboard_status: state.dashboardactivity.dashboard_status,
        dashboard_message: state.dashboardactivity.dashboard_message,
        curr_usertype_id: state.auth.curr_usertype_id
    }
};

const CalendarT = connect(mapStateToProps, {bookappointment})(CalendarTComponent);

export default CalendarT;

