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
        message: "Message sent successfully!",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "An error occurred while sending the message.",
      }),
      {
        status: 500,
      }
    );
  }
}
