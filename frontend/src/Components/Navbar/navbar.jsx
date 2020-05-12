import React,{useEffect,useState} from "react";
import logo from "../../img/logo.png";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode"

import "./navbar.scss";

function Navbar(props) {
  const [username , setUserName] = useState("")
  const [imageUser,setUserImage]  = useState("")
  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token!==null){var decoded = jwt_decode(token);
    setUserName(decoded.username);
    setUserImage(decoded.imageUser)
   }
  }, []);
  return (
    <nav className="navbar navbar-expand navbar-light  static-top osahan-nav ">
     
      <a className="navbar-brand mr-1" href="index.html">
        <img className="img-fluid logo" width="130" alt="" src={logo} />
      </a>
      {/* <!-- Navbar Search --> */}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for..." />
          <div className="input-group-append">
            <button className="btn btn-light" type="button" id="mysearchbtn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      {/* <!-- Navbar --> */}
      <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
        <li className="nav-item mx-1">
          <a className="btn_1" href="upload.html">
            <i className="fas fa-plus-circle fa-fw"></i>
           Start your stream
          </a>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger">9+</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-edit "></i> &nbsp; Action
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-star "></i> &nbsp; Something else here
            </a>
          </div>
        </li>
       
        <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
          {(localStorage.getItem("token") !==null) ? (  <a
            className="nav-link dropdown-toggle user-dropdown-link"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img alt="image" src={imageUser} />
           
            {username}
          </a>) : <a className="btn_1" href="#">
          Sign In
          </a>}
        
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="account.html">
              <i className="fas fa-fw fa-user-circle"></i> &nbsp; My Account
            </a>
            <a className="dropdown-item" href="subscriptions.html">
              <i className="fas fa-fw fa-video"></i> &nbsp; Subscriptions
            </a>
            <a className="dropdown-item" href="settings.html">
              <i className="fas fa-fw fa-cog"></i> &nbsp; Settings
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
const mapStateToProps = (state) => ({ connected: state.connectedUser });
export default connect(mapStateToProps) ( Navbar);
