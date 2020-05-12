import React, {useState} from "react";
import "./Register.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

function Register(props) {
    const [exist, setExist] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        imageUser: "https://cdn.dribbble.com/users/567082/screenshots/4356358/profile_picture.png",
        imageCover: "",
        dataOfBirth: "",
        aboutUser: "",
        country: "",
        activate: true,
        banned: false,
        createdAt: Date.now(),
        role: "user"

    });
    const add = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/", user).then(response => {
            console.log("the status is:", response.status);
            if (response.status === 200) {
                props.history.push("/login");
               
            };
        }).catch(err => {
            setExist("user already exist , try another email  !")
            setUser({
                ...user,
                password: "",
                email: "",
                confirmPassword: ""
            })
        });;


    };
    return (
        <div>
            <div className="container">
                <div className="form">
                    <div className="sign-in-section"
                        style={
                            {paddingTop: 100}
                    }>
                        <h1>Sign Up</h1>
                        <ul>
                            <li>
                                <i className="fab fa-facebook-f"></i>
                            </li>
                            <li>
                                <i className="fab fa-linkedin-in"></i>
                            </li>
                            <li>
                                <i className="fab fa-twitter"></i>
                            </li>
                        </ul>
                        <p>or use your email</p>
                        <form>
                            <div className="form-field">
                                <label for="username">Username</label>
                                <input id="email" type="text" placeholder="Username"
                                    value={
                                        user.username
                                    }
                                    onChange={
                                        (e) => setUser({
                                            ...user,
                                            username: e.target.value
                                        })
                                    }/>
                            </div>
                            <div className="form-field">
                                <label for="email">Email</label>
                                <input id="email" type="email" placeholder="Email"
                                    value={
                                        user.email
                                    }
                                    onChange={
                                        (e) => setUser({
                                            ...user,
                                            email: e.target.value
                                        })
                                    }/>
                            </div>
                            <div className="form-field">
                                <label for="password">Password</label>
                                <input id="password" type="password" placeholder="Password"
                                    value={
                                        user.password
                                    }
                                    onChange={
                                        (e) => setUser({
                                            ...user,
                                            password: e.target.value
                                        })
                                    }/>
                            </div>
                            <div className="form-field">
                                <label for="password">Confirm Password</label>
                                <input id="password" type="password" placeholder="confirm Password"
                                    value={
                                        user.confirmPassword
                                    }
                                    onChange={
                                        (e) => setUser({
                                            ...user,
                                            confirmPassword: e.target.value
                                        })
                                    }/>
                            </div>
                            <div className="form-options">
                                <div className="checkbox-field">
                                    <input id="rememberMe" type="checkbox" className="checkbox"/>
                                    <label for="rememberMe">Remember Me</label>
                                </div>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="form-field">
                                <input type="submit" className="btn btn-signin" value="Submit"
                                    onClick={add}/>
                            </div>
                        </form>
                        <div className="links">
                            {/* <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a> */}
                            {exist} </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Register);
