import React, { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";
import {Dropdown} from 'react-bootstrap'
import "./navbar.scss";
import {Link} from 'react-router-dom'
import Axios from "axios"


function Navbar(props) {
  const [username, setUserName] = useState("");
  const [imageUser, setUserImage] = useState("");
  const [idUser, setIdUser] = useState("");

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token !== null) {
      var decoded = jwt_decode(token);
      
      setIdUser(decoded.id)
      async function getUser() {
        const response = await Axios.get(
          `http://localhost:5000/profile/${decoded.id}`
        );
        setUserName(response.data.username);
        setUserImage(response.data.imageUser);
        
      }
      getUser();

    }
  }, [username]);
  return (
    <nav className="navbar navbar-expand navbar-light  static-top osahan-nav ">
      <a className="navbar-brand mr-1" href="/home">
        <img className="img-fluid logo" width="130" alt="" src={logo} />
      </a>
      {/* <!-- Navbar Search --> */}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
          />
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

    

        <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
          {localStorage.getItem("token") !== null ? (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <img alt="image" width="60px" src={imageUser} />
                {username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item >
                <Link to={`/profile/${idUser}`}>
                   Profile              
                 </Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Notifications</Dropdown.Item>
                <Dropdown.Item href="/home" onClick={() => localStorage.removeItem("token")}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <a className="btn_1" href="/login">
              Sign In
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
}
const mapStateToProps = (state) => ({ connected: state.connectedUser });
export default connect(mapStateToProps)(Navbar);
