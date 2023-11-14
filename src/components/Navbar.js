import { Fragment, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import NITClogo from '../images/NITC_logo.png';
const NavbarComponent = ({ isAuthenticated, logout, usertype_id }) => {
  const navigate = new useNavigate();
  console.log("RENDER : " + isAuthenticated);
  // useEffect(()=>{},[isAuthenticated])

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    navigate('/');
  }

  const guestLinks = () => {
    console.log("GUEST");
    console.log(isAuthenticated)
    return (<>
      <li className="nav-item m-1">
        <NavLink className="nav-link" to="/login">Login</NavLink>
        {/* NavLinks apply the active class when URL is same as their path */}
      </li>
    </>);
  }
  const authLinks = () => {
    console.log("AUTH");
    console.log(isAuthenticated)
    return (<>
     
      <li className="nav-item m-1">
        {usertype_id === 4 ?
          <NavLink className="nav-link" to="/admindashboard">Dashboard</NavLink>
          :
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        }

        {/* NavLinks apply the active class when URL is same as their path */}
      </li>
      <li className="nav-item m-1">
        <NavLink className="nav-link" onClick={(e) => handleLogout()}>Logout</NavLink>
        {/* NavLinks apply the active class when URL is same as their path */}
      </li>
    </>);
  }
  return (
    <Fragment>

      <nav className="navbar navbar-expand-sm navbar-light  bg-light">
        <div class="container">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item m-1">
              <a class="navbar-brand" href="#">
                <img src={NITClogo} alt="" width="130" height="130" />
              </a>
            </li>
            <li className="nav-item m-1 ml-5 mr-5 p-5">
             

            </li>
            <div class="card text-center ">
                <div class="card-header">
                <h2 className="justify-content-center">
                <span>
                 <h1>National Institute Of Technology Calicut</h1>
                </span>
              </h2>
                </div>
                <div class="card-body">
                  <h5 class="card-title">APPOINTMENT SCHEDULER</h5>
                 
                </div>
                
              </div>
          </ul>
        </div>
       
        <ul className="navbar-nav nav-pills mx-auto">
          <li className="nav-item m-1">
            <NavLink className="nav-link align-content-right" to="/">Home</NavLink>
            {/* NavLinks apply the active class when URL is same as their path */}
          </li>
          {/* <div>{isAuthenticated}</div> */}

          {isAuthenticated ? authLinks() : guestLinks()}
          {/* <AuthLinks />
          <GuestLinks /> */}
        </ul>
        

      </nav>


    </Fragment>
  )
}

const mapStateToProps = state => {
  console.log("Navbar.js" + state.auth.isAuthenticated)
  return {
    isAuthenticated: state.auth.isAuthenticated,
    usertype_id: state.auth.curr_usertype_id,
  }
};
const Navbar = connect(mapStateToProps, { logout })(NavbarComponent);
export default Navbar;