import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);

const transporter = {
  auth: {
    // Use SendGrid API key
    api_key:
      "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",
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  const { name, email, phone, subject, text } = req.body;
  console.log({ name, email, phone, subject, text });
  const data = {
    to: "a.martirosyan@t-med.am",
    from: "vahanmkrtumyan90+1@gmail.com",
    subject: "Hi there",
    text: text,
    html: `
            <b>From:</b> ${name} ${email}<br /> 
            <b>Number:</b> ${phone} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        `,
  };

  sgMail
    .send(data)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
      res.status(200).send("Email send successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error proccessing charge");
    });

  // try {
  //   const response = await mailer.sendMail(data);
  //   console.log(response);
  //   res.status(200).send("Email send successfully");
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send("Error proccessing charge");
  // }
};
