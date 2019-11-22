const nodeMailer = require("nodemailer");
require("dotenv").config();

module.exports.sendMail = async newsItem => {
  let transporter = nodeMailer.createTransport({
    host: process.env.EMAIL_SMTP_HOST,
    port: process.env.EMAIL_SMTP_PORT,
    secure: true, //true for 465 port, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"service.fhdo@gmail.com" service.fhdo@gmail.com', // sender address
    to: "mariusm1175@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};
