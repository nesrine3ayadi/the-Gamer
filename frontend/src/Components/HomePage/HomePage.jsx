import React, { Fragment, useEffect } from "react";
import Navbar from "../Navbar/navbar";

import './HopePage.scss'
import Sidebar from "../Sidebar/sidebar";

function HomePage() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "C:/Users/panda/Desktop/VIDOE-Video-Streaming-Template/js/custom.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
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
                    aliqua. Quis ipsum{" "}
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
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_pricing_part">
                            <p>Silver Package</p>
                            <h3>$50.00</h3>
                            <ul>
                                <li>2GB Bandwidth</li>
                                <li>Two Account</li>
                                <li>15GB Storage</li>
                            </ul>
                            <a href="#" className="btn_2">Donate</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_pricing_part">
                            <p>Silver Package</p>
                            <h3>$60.00</h3>
                            <ul>
                                <li>2GB Bandwidth</li>
                                <li>Two Account</li>
                                <li>15GB Storage</li>
                            </ul>
                            <a href="#" className="btn_2">Donate</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single_pricing_part">
                            <p>Silver Package</p>
                            <h3>$80.00</h3>
                            <ul>
                                <li>2GB Bandwidth</li>
                                <li>Two Account</li>
                                <li>15GB Storage</li>
                            </ul>
                            <a href="#" className="btn_2">Donate</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- pricing part end--> */}
    
    </Fragment>
  );
}

export default HomePage;
