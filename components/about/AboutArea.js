import React from "react";
import useTranslation from "../../translation";

export default function About() {
  const t = useTranslation;

  return (
    <section className="about-area ptb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img
                src={require("../../static/images/about-one.png")}
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-content">
              <div className="section-title">
                <h2>{t("aboutUs")}</h2>
                <div className="bar"></div>
                <p></p>
              </div>

              <p>{t("aboutText")}</p>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about-text">
                <h3>{t("ourMission")}</h3>
                <p>{t("ourMissionText")}</p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="about-text">
                <h3>{t("ourClients")}</h3>
                <p>{t("ourClientsText")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-inner-area">
          <div className="row">
            {/* <div className="col-lg-6 col-md-6"> */}
            <div className="about-text">
              <h3>{t("career")}</h3>
              <p>{t("careerText0")}</p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
