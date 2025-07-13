// app/routes/contact.tsx
import { ActionFunction, json } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

// SEO Meta Tags
export const meta: MetaFunction = () => {
  return [
    { title: "Contact Us – Tana Tech Africa" },
    {
      name: "description",
      content:
        "Get in touch with Tana Tech Africa for website development, branding, social media marketing, and digital solutions tailored for your business.",
    },
    {
      name: "keywords",
      content:
        "Tana Tech Africa contact, web agency Kenya, contact tech agency Africa, digital services inquiry, website quote, branding help",
    },
    { name: "author", content: "Tana Tech Africa" },
    { property: "og:title", content: "Contact Tana Tech Africa" },
    { property: "og:description", content: "Reach out to discuss your digital project or ask us a question." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://tanatech.africa/contact" },
    { property: "og:image", content: "/images/contact-meta.jpg" }, // Optional: update this image
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contact Tana Tech Africa" },
    { name: "twitter:description", content: "We’d love to hear from you. Send us a message!" },
    { name: "twitter:image", content: "/images/contact-meta.jpg" }
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return json({ error: "All fields are required." }, { status: 400 });
  }

  const response = await fetch("https://formspree.io/f/myzworwl", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: new URLSearchParams({
      name: String(name),
      email: String(email),
      message: String(message),
    }),
  });

  if (response.ok) {
    return json({ success: true });
  } else {
    return json({ error: "Failed to send message. Please try again later." });
  }
};

export default function ContactPage() {
  const actionData = useActionData<typeof action>();

  return (
    <div className="space-y-16">
      {/* Contact Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Have a project in mind or a question for our team? Reach out and we’ll get back to you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        {actionData?.error && (
          <p className="mb-4 text-red-600 font-medium">{actionData.error}</p>
        )}
        {actionData?.success && (
          <p className="mb-4 text-green-600 font-medium">
            Message sent successfully. We'll get back to you soon!
          </p>
        )}
        <Form method="post" className="space-y-6">
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
        </Form>
      </section>
    </div>
  );
}
