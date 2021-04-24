import React from "react";
import Link from "next/link";
import Image from "next/image";
import useTranslation from "../../translation";

export default function AboutArea() {
  const t = useTranslation;

  return (
    <section className="agency-about-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 hideSmall">
            <div className="agency-about-img">
              <Image
                width="832px"
                height="594px"
                src={require("../../static/images/second.jpeg")}
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="agency-about-content">
              {/* <span className="sub-title">{t("aboutUs")}</span> */}
              <h2>{t("aboutUs")}</h2>
              <div className="bar"></div>
              <p>{t("aboutUsText")}</p>
              <Link href="/about">
                <a className="btn btn-secondary">{t("discover")}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape2 rotateme">
        <img src={require("../../static/images/shape2.svg")} alt="shape" />
      </div>
      <div className="shape3">
        <img src={require("../../static/images/syringe.png")} alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src={require("../../static/images/shape4.svg")} alt="shape" />
      </div>
      <div className="shape7">
        <img src={require("../../static/images/shape4.svg")} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={require("../../static/images/shape2.svg")} alt="shape" />
      </div>
      <div className="shape10">
        <img
          src={require("../../static/images/agency-image/agency-shape2.png")}
          alt="image"
        />
      </div>
    </section>
  );
}
