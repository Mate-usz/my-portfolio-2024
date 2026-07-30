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

/*
 * `service` e `source` sono facoltativi: li manda la barra di prenotazione di
 * /services, il vecchio form di /contact continua a passare solo i tre campi.
 */
export const sendEmail = async (form) => {
  const { name, email, message, service, source } = form;

  const subject = service
    ? `${service} — richiesta da ${name}`
    : `Nuovo messaggio da ${name}`;

  const text = [
    `Nome: ${name}`,
    `Email: ${email}`,
    service ? `Servizio: ${service}` : null,
    source ? `Arrivata da: ${source}` : null,
    "",
    message || "(nessun dettaglio aggiunto)",
  ]
    .filter((line) => line !== null)
    .join("\n");

  const mailOptions = {
    from: `"mateuszrodz.com" <contact@mateuszrodz.com>`,
    to: "hello@mateuszrodz.com",
    replyTo: email,
    subject,
    text,
  };
  await transporter.sendMail(mailOptions);
};
