import React, { useEffect, useState } from "react";
import Link from "../common/ActiveLink";
import * as Icon from "react-feather";
import { useRouter } from "next/router";
import en from "../../static/locales/en";
import hy from "../../static/locales/hy";
import ru from "../../static/locales/ru";

export default function DefaultStyle() {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  let { pathname, locale } = router;

  const locales = {
    hy,
    ru,
    en,
  };
  const t = () => locales[locale];

  console.log(t("title"));

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

  console.log({ router });

  return (
    <header id="header" className="navbar-style-three agency-navbar">
      <div id="navbar" className={`startp-nav ${layOutCls}`}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a className="navbar-brand">
                <img src={require("../../static/images/logo.png")} alt="logo" />
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
                      Home
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link activeClassName="active" href="/about">
                    <a className="nav-link">About</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link activeClassName="active" href="/services">
                    <a href="#" className="nav-link">
                      Services
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="/products" className="nav-link">
                    Products
                  </a>
                </li>

                <li className="nav-item">
                  <Link activeClassName="active" href="/blog">
                    <a className="nav-link">Blog</a>
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="/products" className="nav-link">
                    Language <Icon.ChevronDown />
                  </a>
                  <ul className="dropdown_menu">
                    <li className="nav-item">
                      <Link activeClassName="active" href="" locale="hy">
                        <a className="nav-link">Հայերեն</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link activeClassName="active" href="" locale="en">
                        <a className="nav-link">English</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link activeClassName="active" href="" locale="ru">
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
                <a className="btn btn-gradient">Contact Us</a>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
