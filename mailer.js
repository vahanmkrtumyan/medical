const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

const send = ({ name, email, phone, subject, text }) => {
  const textBody = `Name: ${name}   
                Subject: ${subject}             
                Email: ${email}
                Phone: ${phone}
                Body: ${text}
                This email came from T-med website
                `;

  const from = name && email ? `${name} <${email}>` : `${name || email}`;

  const message = {
    from,
    to: "vahanmkrtumyan@gmail.com",
    subject: subject,
    text: textBody,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      console.log(error);
      return error ? reject(error) : resolve(info);
    });
  });
};

module.exports = send;
