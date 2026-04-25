import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (form) => {
  const { name, email, message } = form;

  const mailOptions = {
    from: `"mateuszrodz.com" <contact@mateuszrodz.com>`,
    to: "hello@mateuszrodz.com",
    replyTo: email,
    subject: `Nuovo messaggio da ${name}`,
    text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
  };
  await transporter.sendMail(mailOptions);
};
