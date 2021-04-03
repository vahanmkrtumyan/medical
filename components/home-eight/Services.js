import React from "react";
import useTranslation from "../../translation";

export default function Services() {
  const t = useTranslation;

  return (
    <div className="agency-services-area ptb-80">
      <div className="container">
        <div className="section-title st-fs-28">
          {/* <span className="sub-title">Our Solutions</span> */}
          <h2>{t("ourServices")}</h2>
          <div className="bar"></div>
          <p>{t("servicesText")}</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img
                src={require("../../static/images/equipmentService.png")}
                alt="image"
              />

              <div className="content">
                <h3>
                  {/* <Link href="#"> */}
                  <a>{t("service1")}</a>
                  {/* </Link> */}
                </h3>

                {/* <Link href="#">
                  <a className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img
                src={require("../../static/images/complex.webp")}
                alt="image"
              />

              <div className="content">
                <h3>
                  {/* <Link href="#"> */}
                  <a>{t("service2")}</a>
                  {/* </Link> */}
                </h3>

                {/* <Link href="#">
                  <a className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img
                src={require("../../static/images/hospital.webp")}
                alt="image"
              />

              <div className="content">
                <h3>
                  {/* <Link href="#"> */}
                  <a>{t("service3")}</a>
                  {/* </Link> */}
                </h3>

                {/* <Link href="#">
                  <a className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </a>
                </Link> */}
              </div>
            </div>
          </div>
          {/* <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img
                src={require("../../static/images/agency-image/agency-services-img4.jpg")}
                alt="image"
              />

              <div className="content">
                <h3>
                  <Link href="#">
                    <a>SEO & Content</a>
                  </Link>
                </h3>

                <Link href="#">
                  <a className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img
                src={require("../../static/images/agency-image/agency-services-img5.jpg")}
                alt="image"
              />

              <div className="content">
                <h3>
                  <Link href="#">
                    <a>Digital Marketing</a>
                  </Link>
                </h3>

                <Link href="#">
                  <a className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-sm-6 col-md-6">
            <div className="agency-services-box">
              <img
                src={require("../../static/images/agency-image/agency-services-img6.jpg")}
                alt="image"
              />

              <div className="content">
                <h3>
                  <Link href="#">
                    <a>Data Analysts</a>
                  </Link>
                </h3>

                <Link href="#">
                  <a className="read-more-btn">
                    Read More <Icon.PlusCircle />
                  </a>
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape2 rotateme">
        <img src={require("../../static/images/shape2.svg")} alt="shape" />
      </div>
      <div className="shape3">
        <img src={require("../../static/images/syringe.png")} alt="shape" />
      </div>
      <div className="shape4">
        <img src={require("../../static/images/shape4.svg")} alt="shape" />
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
    </div>
  );
}
