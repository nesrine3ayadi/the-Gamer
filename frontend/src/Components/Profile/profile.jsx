import React, { useState, useEffect, Fragment } from "react";
import channelbanner from "../../img/channel-banner.png";
import s2 from "../../img/s2.png";
import Axios from "axios";
import { connect } from "react-redux";
import { displayCurrentUser } from "../../Actions/action";
import "./profile.scss";
import { Link } from "react-router-dom";
import { Tabs, Tab} from 'react-bootstrap'
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import Navbar from "../Navbar/navbar";
import Chat from "../Chat/Chat";
import VideoCard from "../VideoCard/VideoCard";


const Profile = (props) => {
  const [profileImg, setProfileImg] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutUser, setAboutUser] = useState("");
  const [country, setCountry] = useState("");
  //
  useEffect(() => {
    async function getUser() {
      const response = await Axios.get(
        `http://localhost:5000/profile/${props.match.params.idUser}`
      );
      setProfileImg(response.data.imageUser);
      setCoverImg(response.data.imageCover)
      setUserName(response.data.username);
      setEmail(response.data.email);
      setPassword(response.data.password);
      setAboutUser(response.data.aboutUser);
      setCountry(response.data.country);
    }
    getUser();
  }, [props.match.params.idUser]);

  const onFileChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("imageUser", profileImg);
    formData.append("imageCover",coverImg);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("aboutUser", aboutUser);
    formData.append("country", country);
    console.log(formData);
    Axios.put(
      `http://localhost:5000/${props.match.params.idUser}`,
      formData,
      {}
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    <Fragment>
  <Navbar />
 
    <div className="row" id="profilePage">
      <div className="single-channel-page col-md-8" id="content-wrapper" >
        <div className="single-channel-image" style={{height:"300px", overflow:"hidden" }}>
          <img className="img-fluid" alt="" src={coverImg} />
          <div className="channel-profile">
            <img className="channel-profile-img" alt="" src={profileImg} />
          </div>
        </div>
        <Tabs defaultActiveKey="videos" id="uncontrolled-tab-example">
          <Tab eventKey="editProfile" title="Stream">
        
          </Tab>
          <Tab eventKey="videos" title="Videos">
               <VideoCard/>
          </Tab>
          <Tab eventKey="donate" title="Donate" >
              Donate
          </Tab>
        </Tabs>
        
      </div>
      <div className="col-md-4 col-sm-12 col-xs-12 chatRight">
        <Chat idprofile={props.match.params.idUser} />
       
        
      </div>
    </div>
   
    </Fragment>
  );
};
const mapStateToPops = (state) => ({ currentUser: state.currentUser });
export default connect(mapStateToPops, { displayCurrentUser })(Profile);
