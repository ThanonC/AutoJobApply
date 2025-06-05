import FormData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(FormData);

const mg = mailgun.client({
  username: "Kay Rothenbach",
  key: process.env.MAILGUN_API_KEY,
});

export default async function sendEmail(domain, from, to, subject, text) {
  try {
    const response = await mg.messages.create(domain, {
      from,
      to,
      subject,
      text,
    });

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}