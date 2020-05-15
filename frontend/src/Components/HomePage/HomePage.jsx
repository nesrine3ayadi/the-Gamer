import React, { Fragment, useEffect } from "react";
import Navbar from "../Navbar/navbar";
import ChannelCard from "../ChannelCard/ChannelCard";
import "./HopePage.scss";
import Sidebar from "../Sidebar/sidebar";
import { connect } from "react-redux";
import Axios from "axios"
import {displayUser} from "../../Actions/action"
//
function HomePage(props) {
  useEffect(()=>{
    async function getGamers()
    {
     const response = await Axios.get("http://localhost:5000/");
     props.displayUser(response.data)
    } 
     getGamers()
 
   },[props.users])
 
  return (
    <Fragment>
       <Navbar />
      <Sidebar />
      {/* <!-- banner part start--> */}
      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-md-8">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h1>Best Highlights of the Latest</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum
                  </p>
                  <a href="#" className="btn_1">
                    Watch Tutorial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Channels Categories */}
      
      {/* <!-- pricing part start--> */}
      <section className="pricing_part padding_top">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_tittle text-center">
                <h2>Best Channels</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {props.users.map((user) => (
              <div key={user._id} className="col-lg-4 col-sm-12 text-center" style={{ marginBottom: "30px"}}>
                <ChannelCard user={user} />
               
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- pricing part end--> */}
    </Fragment>
  );
}
const mapStatetoProps = state => ({
  users: state.users,
});
export default connect(mapStatetoProps,{displayUser})(HomePage);
