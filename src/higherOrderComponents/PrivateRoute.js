import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate, Outlet, Route, useNavigate } from "react-router-dom";


const PrivateRoute = ({isAuthenticated, ...rest})=> { // ...rest = >est of the props
  console.log("AUTH : "+isAuthenticated)
  console.log("COMP : "+ {...rest});
  const navigate = new useNavigate();
  return isAuthenticated? <Outlet/>: <Navigate to="/login"/>
}

const mapStateToProps = (state)=>{
  
  console.log(state.auth)
  return{
    isAuthenticated :state.auth.isAuthenticated
}}

export default connect(mapStateToProps,{})(PrivateRoute)