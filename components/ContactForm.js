"use client";
import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  async function sendEmailFromForm(event) {
    event.preventDefault();
    const form = {
      name: event.target[0].value,
      email: event.target[1].value,
      message: event.target[2].value,
    };
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ form: form }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage(data.message);
    } else {
      setMessage("Failed to send email.");
    }
  }

  return (
    <section className="p-6">
      <form onSubmit={sendEmailFromForm}>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-600 rounded-lg dark:text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-600 rounded-lg dark:text-black"
          />
          <textarea
            placeholder="Message"
            className="p-2 col-span-2 border w-full border-gray-600 rounded-lg dark:text-black"
          ></textarea>
        </div>
        <button
          className="mt-4 text-white bg-gray-700 dark:text-black dark:bg-gray-200 w-full px-4 py-2 rounded"
          type="submit"
        >
          Send Message
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </section>
  );
}
