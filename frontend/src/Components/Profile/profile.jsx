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
  const [pictures , setPictures ] = useState([])
  const onDrop = picture=> {
    setPictures(
        pictures.concat(picture),
    );
}
   
  useEffect(()=>{
    Axios.get(`http://localhost:5000/profile/${props.match.params.idUser}`).then(resp=>props.displayCurrentUser(resp.data))
     
  },[])
 
    
  return (
    <div className="single-channel-page" id="content-wrapper">
      <Navbar />
      <div className="single-channel-image">
        <img className="img-fluid" alt="" src={channelbanner} />
        <div className="channel-profile">
          <img className="channel-profile-img" alt="" src={s2} />
       
        </div>
      </div>
      <div classNameName="row">      
      <FormControl classNameName="col-md-8">
        <InputLabel htmlFor="usename">Username</InputLabel>
        <Input id="username" aria-describedby="my-helper-text"  value ={props.currentUser.username}/>
        <FormHelperText id="my-helper-text">
          Change your username.
        </FormHelperText>
      </FormControl>
      <FormControl classNameName="col-md-8">
        <InputLabel htmlFor="Email">Email address</InputLabel>
        <Input id="Email" aria-describedby="my-helper-text"  value={props.currentUser.email} />
        <FormHelperText id="my-helper-text">
         Put your email.
        </FormHelperText>
      </FormControl>
      <FormControl classNameName="col-md-8">
        <InputLabel htmlFor="Aboutuser">About me</InputLabel>
        <Input id="Aboutuser" aria-describedby="my-helper-text" value={props.currentUser.aboutUser} />
        <FormHelperText id="my-helper-text">
         Write something about you
        </FormHelperText>
      </FormControl>
      <FormControl classNameName="col-md-8">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" value={props.currentUser.password} />
        <FormHelperText id="my-helper-text">
        Change your password
        </FormHelperText>
      </FormControl>
      <FormControl classNameName="col-md-8">
        <InputLabel htmlFor="password">Country</InputLabel>
        <Input id="password" aria-describedby="my-helper-text" value={props.currentUser.country} />
        <FormHelperText id="my-helper-text">
        Where are you from ?
        </FormHelperText>
      </FormControl>
      <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={()=>onDrop()}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
                singleImage={true}
            />
      
      </div>
    </div>
  );
}
const mapStateToPops = state =>({
   currentUser: state.currentUser
})
export default connect(mapStateToPops,{displayCurrentUser}) (Profile);
