import React from "react";
import logo from "../../img/logo.png";
import { connect } from "react-redux";

import "./navbar.scss";

function Navbar(props) {
  return (
    <nav class="navbar navbar-expand navbar-light  static-top osahan-nav ">
     
      <a class="navbar-brand mr-1" href="index.html">
        <img class="img-fluid logo" width="130" alt="" src={logo} />
      </a>
      {/* <!-- Navbar Search --> */}
      <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." />
          <div class="input-group-append">
            <button class="btn btn-light" type="button" id="mysearchbtn">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      {/* <!-- Navbar --> */}
      <ul class="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
        <li class="nav-item mx-1">
          <a class="btn_1" href="upload.html">
            <i class="fas fa-plus-circle fa-fw"></i>
           Start your stream
          </a>
        </li>
        <li class="nav-item dropdown no-arrow mx-1">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fas fa-bell fa-fw"></i>
            <span class="badge badge-danger">9+</span>
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown"
          >
            <a class="dropdown-item" href="#">
              <i class="fas fa-fw fa-edit "></i> &nbsp; Action
            </a>
            <a class="dropdown-item" href="#">
              <i class="fas fa-fw fa-headphones-alt "></i> &nbsp; Another action
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <i class="fas fa-fw fa-star "></i> &nbsp; Something else here
            </a>
          </div>
        </li>
       
        <li class="nav-item dropdown no-arrow osahan-right-navbar-user">
          <a
            class="nav-link dropdown-toggle user-dropdown-link"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img alt="image" src={props.connected.imageUser} />
           
            {props.connected.username}
          </a>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown"
          >
            <a class="dropdown-item" href="account.html">
              <i class="fas fa-fw fa-user-circle"></i> &nbsp; My Account
            </a>
            <a class="dropdown-item" href="subscriptions.html">
              <i class="fas fa-fw fa-video"></i> &nbsp; Subscriptions
            </a>
            <a class="dropdown-item" href="settings.html">
              <i class="fas fa-fw fa-cog"></i> &nbsp; Settings
            </a>
            <div class="dropdown-divider"></div>
            <a
              class="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i class="fas fa-fw fa-sign-out-alt"></i> &nbsp; Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
const mapStateToProps = (state) => ({ connected: state.connectedUser });
export default connect(mapStateToProps) ( Navbar);
