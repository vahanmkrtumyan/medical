import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import useTranslation from "../../translation";

export default function ServicesContent() {
  const t = useTranslation;

  return (
    <section className="services-area-two ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>{t("ourServices")}</h2>
          <div className="bar"></div>
          <p>{t("servicesText")}</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Info />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>{t("service1")}</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Info />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>{t("service2")}</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon">
                <Icon.Info />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>{t("service3")}</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon bg-c679e3">
                <Icon.Grid />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Simple Dashboard</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon bg-c679e3">
                <Icon.Info />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Information Retrieval</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div> */}

          {/* <div className="col-lg-4 col-md-6">
            <div className="single-services-box">
              <div className="icon bg-c679e3">
                <Icon.HardDrive />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Deep Technical SEO</a>
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
