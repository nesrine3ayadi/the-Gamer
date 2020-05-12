import React, {useState, useEffect} from "react";
import channelbanner from "../../img/channel-banner.png";
import s2 from "../../img/s2.png";
import Axios from 'axios'
import {connect} from "react-redux"
import {displayCurrentUser} from "../../Actions/action"
import './profile.scss'
import ImageUploader from 'react-images-upload';

import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import  Navbar  from "../Navbar/navbar";


const Profile =(props)=> {
   
  useEffect(()=>{
    Axios.get(`http://localhost:5000/profile/${props.match.params.idUser}`).then(resp=>props.displayCurrentUser(resp.data))
     
  },[])
    

  return (

   
    <div class="single-channel-page" id="content-wrapper">
      <Navbar />
      <div class="single-channel-image">
        <img class="img-fluid" alt="" src={channelbanner} />
        <div class="channel-profile">
          <img class="channel-profile-img" alt="" src={s2} />
       
        </div>
      </div>
      <div className="row"> 

      
      <FormControl className="col-md-8">
        <InputLabel htmlFor="usename">Username</InputLabel>
        <Input id="username" aria-describedby="my-helper-text"  value ={props.currentUser.username}/>
        <FormHelperText id="my-helper-text">
          Change your username.
        </FormHelperText>
      </FormControl>
      <FormControl className="col-md-8">
        <InputLabel htmlFor="Email">Email address</InputLabel>
        <Input id="Email" aria-describedby="my-helper-text"  value={props.currentUser.email} />
        <FormHelperText id="my-helper-text">
         Put your email.
        </FormHelperText>
      </FormControl>
      <FormControl className="col-md-8">
        <InputLabel htmlFor="Aboutuser">About me</InputLabel>
        <Input id="Aboutuser" aria-describedby="my-helper-text" value={props.currentUser.aboutUser} />
        <FormHelperText id="my-helper-text">
         Write something about you
        </FormHelperText>
      </FormControl>
      <FormControl className="col-md-8">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" value={props.currentUser.password} />
        <FormHelperText id="my-helper-text">
        Change your password
        </FormHelperText>
      </FormControl>
      <FormControl className="col-md-8">
        <InputLabel htmlFor="password">Country</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" value={props.currentUser.country} />
        <FormHelperText id="my-helper-text">
        Where are you from ?
        </FormHelperText>
      </FormControl>
      
      </div>
    </div>
  );
}
const mapStateToPops = state =>({
   currentUser: state.currentUser
})
export default connect(mapStateToPops,{displayCurrentUser}) (Profile);
