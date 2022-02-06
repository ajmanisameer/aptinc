const nodemailer = require("nodemailer");

module.exports.send = function (params) {
  const credentials = {
    email: "ajmanisameer@gmail.com",
    password: "jlcelehcahczdipj"
  }
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: credentials.email,
      pass: credentials.password,
    },
  });

  params.to = credentials.email
  params.from = credentials.email


  mailTransporter.sendMail(params, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
};
