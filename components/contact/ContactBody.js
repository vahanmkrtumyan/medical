import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import "isomorphic-fetch";
import useTranslation from "../../translation";

export default function ContactBody() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [text, setText] = useState();
  const [subject, setSubject] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = this.state.formFields;
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? setSubmitted(true) : "";
      setEmail();
      setName();
      setPhone();
      setText();
      setSubject();
    });
  };

  const successMessage = () => {
    if (submitted) {
      return (
        <div className="alert alert-success">
          <strong>Thank you!</strong> Your message is send to the owner
          <button onClick={onHideSuccess} type="button" className="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      );
    }
  };

  const onHideSuccess = () => {
    setSubmitted(false);
  };

  return (
    <React.Fragment>
      <section className="contact-info-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>{useTranslation("mailHere")}</h3>
                <p>
                  <Link href="#">
                    <a>info@tmed.am</a>
                  </Link>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Map />
                </div>
                <h3>{useTranslation("visitHere")}</h3>
                <p>
                  {useTranslation("addressText")}
                  {/* 27 Division St, New York, NY 10002, <br /> USA */}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>{useTranslation("call")}</h3>
                <p>
                  <Link href="#">
                    <a>+374 ** ** ** **</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4831929811817!2d44.510084315662624!3d40.17605897939373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf9dab0c531%3A0x44c0e42c270b565b!2s26%2C%201%20Vazgen%20Sargsyan%20St%2C%20Yerevan%200010%2C%20Armenia!5e0!3m2!1sen!2s!4v1619265260622!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0, width: "100%" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      <section className="contact-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>{useTranslation("GetInTouch")}</h2>
            <div className="bar"></div>
            <p>{useTranslation("GladToAssist")}</p>
          </div>

          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src={require("../../static/images/contact-us.svg")}
                alt="image"
              />
            </div>

            <div className="col-lg-6 col-md-12">
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder={useTranslation("name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder={useTranslation("email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder={useTranslation("phone")}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder={useTranslation("subject")}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="5"
                        required
                        data-error="Write your message"
                        placeholder={useTranslation("message")}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      {useTranslation("send")}
                    </button>

                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                {successMessage()}
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
