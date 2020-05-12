import React, {useEffect} from 'react';
import './App.css';
import Register from './Components/Registration/Register';
import Login from './Components/Login/Login';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {displayUser} from "./Actions/action"
import Axios from "axios"
import { connect } from "react-redux";
import Profile from './Components/Profile/profile';


function App(props) {
  useEffect(()=>{
    Axios.get("http://localhost:5000/").then(resp => props.displayUser(resp.data))
  },)
  return (
    <div className="App">
    
       <Route exact path ="/register" component={Register}></Route>
       <Route exact path ="/login" component={Login}></Route>
       <Route exact path = "/home" component={HomePage}></Route>
       <Route exact path = "/profile/:idUser" component={Profile}></Route>
    </div>
  );
}

export default connect(null,{displayUser})(App);
