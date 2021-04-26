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

  console.log({ subject, text, name, email, phone });

  const message = {
    from: "vahanmkrtumyan90+1@gmail.com",
    to: "vahanmkrtumyan90+1@gmail.com",
    subject: subject,
    text: text,
    html: `
    <b>From:</b> ${name} ${email}<br /> 
    <b>Number:</b> ${phone} <br /> 
    <b>Subject:</b> ${subject} <br /> 
    <b>Text:</b> ${text} 
`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      console.log({ Theerror: error });
      return error ? reject(error) : resolve(info);
    });
  });
};

module.exports = send;
