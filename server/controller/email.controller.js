const nodemailer = require("nodemailer");
const emailSettingsProvider = require("../config/email.settings");

module.exports = {
  sendMail: (to, body) => {
    const settings = emailSettingsProvider.getSettings();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: settings.from,
        pass: settings.password
      }
    });
    const mailOptions = {
      from: settings.from,
      to: to,
      subject: settings.subject,
      html: body
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
};
