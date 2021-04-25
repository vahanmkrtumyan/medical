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
    from: "vahanmkrtumyan90@gmail.com",
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
