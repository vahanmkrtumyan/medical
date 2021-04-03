import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import useTranslation from "../../translation";

export default function Footer() {
  const t = useTranslation;

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="#">
                  <a>
                    <img
                      src={require("../../static/images/logo.png")}
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>
              {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi.
            </p> */}
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link href="/about">
                    <a>{t("about")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>{t("services")}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>{t("contact")}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              {/* <h3>Support</h3> */}
              <ul className="list">
                <li>
                  {/* <Link href="/contact">
                  <a>Contact Us</a>
                </Link> */}
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>{t("address")}</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  27 Division St, New York, <br /> NY 10002, USA
                </li>
                <li>
                  <Icon.Mail />
                  Email:{" "}
                  <Link href="#">
                    <a>startp@gmail.com</a>
                  </Link>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Phone:{" "}
                  <Link href="#">
                    <a>+ (321) 984 754</a>
                  </Link>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <Link href="#">
                    <a className="facebook">
                      <Icon.Facebook />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="twitter">
                      <Icon.Twitter />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="instagram">
                      <Icon.Instagram />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="linkedin">
                      <Icon.Linkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>Copyright @2021 T-Med. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={require("../../static/images/map.png")}
        className="map"
        alt="map"
      />
      <div className="shape1">
        <img src={require("../../static/images/shape1.png")} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={require("../../static/images/shape2.svg")} alt="shape" />
      </div>
    </footer>
  );
}
