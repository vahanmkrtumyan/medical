import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

class MainBanner extends Component {
  render() {
    return (
      <div className="agency-main-banner">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-banner-content">
                <span className="sub-title">We offer</span>
                <h1>Medical equipments</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>

                <Link href="#">
                  <a className="btn btn-secondary">Get Started</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-banner-image">
                <Image
                  src={require("../../static/images/first.jpg")}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <img src={require("../../static/images/shape2.svg")} alt="shape" />
        </div>
        <div className="shape8 rotateme">
          <img src={require("../../static/images/shape2.svg")} alt="shape" />
        </div>
        <div className="shape3">
          <img src={require("../../static/images/shape3.svg")} alt="shape" />
        </div>
        <div className="shape4">
          <img src={require("../../static/images/shape4.svg")} alt="shape" />
        </div>
      </div>
    );
  }
}

export default MainBanner;
