import { sendEmail } from "@/lib/server/mailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 200, service: 120, source: 120, message: 4000 };

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function json(message, status) {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/*
 * La rotta manda una mail vera, quindi valida prima di girare qualsiasi cosa a
 * nodemailer: senza controlli è un modo comodo per far spedire spam dal nostro
 * account SMTP. I campi sono anche troncati per non farci arrivare romanzi.
 */
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return json("Richiesta non valida.", 400);
  }

  const form = body?.form || {};
  const name = clean(form.name, MAX.name);
  const email = clean(form.email, MAX.email);

  if (!name || !email) {
    return json("Nome ed email sono obbligatori.", 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json("L'indirizzo email non è valido.", 400);
  }

  try {
    await sendEmail({
      name,
      email,
      message: clean(form.message, MAX.message),
      service: clean(form.service, MAX.service),
      source: clean(form.source, MAX.source),
    });
    return json("Messaggio inviato! Ti rispondo entro poche ore.", 200);
  } catch {
    return json("Invio fallito. Riprova più tardi.", 500);
  }
}
