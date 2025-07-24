// src/app/contact/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/myzworwl", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new URLSearchParams(formData as any),
    });

    const result = await response.json();

    if (response.ok) {
      setFormState("success");
      form.reset();
    } else {
      setFormState("error");
      setErrorMessage(result?.error || "Something went wrong. Please try again later.");
    }
  }

  return (
    <>
      {formState === "error" && (
        <p className="mb-4 text-red-600 font-medium">{errorMessage}</p>
      )}
      {formState === "success" && (
        <p className="mb-4 text-green-600 font-medium">
          Message sent successfully. We'll get back to you soon!
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full border rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full border rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            className="w-full border rounded px-4 py-2 bg-white dark:bg-gray-800 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </>
  );
}
