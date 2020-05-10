import React, { useState } from "react";
import { connect } from "react-redux";
import "./Register.scss";
import { addUser } from "../../Actions/action";
import axios from "axios";

function Register(props) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    imageUser:"https://cdn.dribbble.com/users/567082/screenshots/4356358/profile_picture.png",
   
    imageCover:"",
    dataOfBirth:"",
    aboutUser:"",
    country:"",
    activate:true,
    banned:false,
    createdAt:Date.now(),
    role:"user"

  });
  const add = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/", user);
    props.addUser(user)
    setUser({...user,
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  return (
    <div>
      <div class="container">
        <div class="form">
          <div class="sign-in-section">
            <h1>Sign Up</h1>
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
                <label for="username">Username</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </div>
              <div class="form-field">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div class="form-field">
                <label for="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div class="form-field">
                <label for="password">Confirm Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="confirm Password"
                  value={user.confirmPassword}
                  onChange={(e) =>
                    setUser({ ...user, confirmPassword: e.target.value })
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
                <input
                  type="submit"
                  class="btn btn-signin"
                  value="Submit"
                  onClick={add}
                />
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

export default connect(null, { addUser })(Register);
