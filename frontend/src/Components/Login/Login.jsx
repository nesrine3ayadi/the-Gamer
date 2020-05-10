import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { displayUser, connectedUser } from "../../Actions/action";
import Axios from "axios";

function Login(props) {
  useEffect(() => {
    Axios.get("http://127.0.0.1:5000/").then((resp) =>
      props.displayUser(resp.data)
    );
  });
  const [user, setUser] = useState({ email: "", password: "" });
  const item = props.items.find(
    (e) => e.email === user.email && e.password === user.password
  );

  const check = item !== undefined ? true : false;
  return (
    <div>
      <div class="container">
        <div class="form">
          <div class="sign-in-section">
            <h1>Sign In</h1>
            <ul>
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-linkedin-in"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
            </ul>
            <p>or use your email</p>
            <form>
              <div class="form-field">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div class="form-field">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                />
              </div>
              <div class="form-options">
                <div class="checkbox-field">
                  <input id="rememberMe" type="checkbox" class="checkbox" />
                  <label for="rememberMe">Remember Me</label>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
              <div class="form-field">
                {check ? (
                  <Link to="/home">
                    <button
                     
                      class="btn btn-signin"
                    
                      onClick={()=> props.connectedUser(item)}
                    > Submit </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button
                     
                      class="btn btn-signin"
                      
                    >
                        Submit </button>
                  </Link>
                )}
              </div>
            </form>
            <div class="links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({ items: state.users });
export default connect(mapStateToProps, { displayUser, connectedUser })(Login);
