import React, { useState } from "react";
import * as Icon from "react-feather";
import useTranslation from "../../translation";

export default function CategoryModal({ closeModal, product }) {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [text, setText] = useState();

  const t = useTranslation;

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      name,
      phone,
      text,
      subject: product.name,
    };
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? closeModal() : "";
    });
  }

  //   successMessage = () => {
  //     if (submitted){
  //         return (
  //             <div className="alert alert-success">
  //                 <strong>Thank you!</strong> Your message is send to the owner
  //                 <button onClick={this.onHideSuccess} type="button" className="close">
  //                     <span aria-hidden="true">&times;</span>
  //                 </button>
  //             </div>
  //         );
  //     }
  // toast.success('Added to the cart', {
  //   position: "bottom-left",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true
  // });
  // }

  return (
    <div
      className="modal fade show"
      style={{ padding: "16px", display: "block" }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
        style={{ maxWidth: "500px" }}
      >
        <div className="modal-content" style={{ padding: "16px" }}>
          <Icon.X
            style={{ cursor: "pointer", marginLeft: "auto" }}
            onClick={closeModal}
          />
          <h2>{t("enquiry")}</h2>
          <section className="contact-info-area ptb-80">
            <div className="col-lg-12 col-md-12">
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
                        placeholder={t("name")}
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
                        placeholder="Email"
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
                        placeholder={t("phone")}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={subject}
                        onChange={subjectChangeHandler}
                      />
                    </div>
                  </div> */}

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
                        placeholder={t("message")}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>

                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
                {/* {successMessage()} */}
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
