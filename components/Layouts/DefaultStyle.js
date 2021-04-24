import React, { useEffect, useState } from "react";
// import Link from "../common/ActiveLink";
import Link from "next/link";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
import en from "../../static/locales/en";
import hy from "../../static/locales/hy";
import ru from "../../static/locales/ru";
import armenia from "../../static/images/armenia.svg";
import russia from "../../static/images/russia.svg";
import uk from "../../static/images/united-states.svg";
import logo from "../../static/images/logo.svg";

export default function DefaultStyle() {
  const [collapsed, setCollapsed] = useState(true);
  const router = useRouter();
  let { pathname, locale, query } = router;

  const locales = {
    hy,
    ru,
    en,
  };

  const images = {
    hy: armenia,
    ru: russia,
    en: uk,
  };

  const t = (verse) => locales[locale][verse];

  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window && window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window && window.scrollTo(0, 0);
  }, []);

  function toggleNavbar() {
    setCollapsed(!collapsed);
  }

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  let layOutCls = "";
  if (pathname == "/home-three") {
    layOutCls = "p-relative";
  }

  const href = query.name
    ? {
        pathname: "",
        query: { name: query.name },
      }
    : "";

  return (
    <header id="header" className="navbar-style-three agency-navbar">
      <div id="navbar" className={`startp-nav ${layOutCls}`}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a className="navbar-brand" style={{ paddingTop: "0" }}>
                <img style={{ width: "48px" }} src={logo} alt="logo" />
              </a>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav nav">
                <li className="nav-item">
                  <Link activeClassName="active" href="/">
                    <a
                      // onClick={(e) => e.preventDefault()}
                      href=""
                      className="nav-link"
                    >
                      {t("home")}
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link activeClassName="active" href="/about">
                    <a className="nav-link">{t("about")}</a>
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link activeClassName="active" href="/services">
                    <a href="#" className="nav-link">
                      {t("services")}
                    </a>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <Link activeClassName="active" href="/products">
                    <a href="#" className="nav-link">
                      {t("products")}
                    </a>
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link activeClassName="active" href="/blog">
                    <a className="nav-link">{t("blog")}</a>
                  </Link>
                </li> */}

                <li className="nav-item">
                  <a
                    href="/products"
                    className="nav-link"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <img style={{ height: "16px" }} src={images[locale]} />{" "}
                    <Icon.ChevronDown />
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <Link activeClassName="active" href={href} locale="hy">
                        <a className="nav-link">Հայերեն</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href={href} locale="en">
                        <a className="nav-link">English</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href={href} locale="ru">
                        <a className="nav-link">Русский</a>
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* <li className="nav-item">
                    <Link activeClassName="active" href="/contact">
                      <a className="nav-link">Contact</a>
                    </Link>
                  </li> */}

                {/* <li className="nav-item cart-wrapper">
                    <Link href="/cart">
                      <a className="nav-link">
                        <Icon.ShoppingCart />
                        <span>{products.length}</span>
                      </a>
                    </Link>
                  </li> */}
              </ul>
            </div>

            <div className="others-option">
              <Link href="/contact">
                <a className="btn btn-gradient">{t("contact")}</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
