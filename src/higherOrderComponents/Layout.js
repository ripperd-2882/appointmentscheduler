import React from 'react'
import { Fragment } from "react";
import  Navbar  from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </Fragment>
  )
}

export default Layout