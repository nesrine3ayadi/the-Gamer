import React, {useState, useEffect} from "react";
import channelbanner from "../../img/channel-banner.png";
import s2 from "../../img/s2.png";
import Axios from 'axios'
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";

function Profile(props) {
 
  const [currentUser, setCurrentUser] = useState()
  useEffect(()=>{
    Axios.get(`http://localhost:5000/${props.match.params.idUser}`).then(resp => setCurrentUser(resp.data))
    
  },)
    

  return (
    <div class="single-channel-page" id="content-wrapper">
      <div class="single-channel-image">
        <img class="img-fluid" alt="" src={channelbanner} />
        <div class="channel-profile">
          <img class="channel-profile-img" alt="" src={s2} />
          <div class="social hidden-xs">
            Social &nbsp;
            <a class="fb" href="#">
              Facebook
            </a>
            <a class="tw" href="#">
              Twitter
            </a>
            <a class="gp" href="#">
              Google
            </a>
          </div>
        </div>
      </div>
      <FormControl>
        <InputLabel htmlFor="usename">Username</InputLabel>
        <Input id="username" aria-describedby="my-helper-text" value={currentUser.username} />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="Email">Email address</InputLabel>
        <Input id="Email" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="Aboutuser">About me</InputLabel>
        <Input id="Aboutuser" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </div>
  );
}

export default Profile;
