import { sendEmail } from "@/lib/server/mailer";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const body = await req.json();
  const { form } = body;

  try {
    await sendEmail(form);
    return new Response(
      JSON.stringify({
        message: "Messaggio inviato! Ti rispondo entro poche ore.",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Invio fallito. Riprova più tardi.",
      }),
      {
        status: 500,
      }
    );
  }
}
