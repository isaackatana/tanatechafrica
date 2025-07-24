// src/app/contact/page.tsx
import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Tana Tech Africa",
  description:
    "Get in touch with Tana Tech Africa for website development, branding, social media marketing, and digital solutions tailored for your business.",
  keywords:
    "Tana Tech Africa contact, web agency Kenya, contact tech agency Africa, digital services inquiry, website quote, branding help",
  authors: [{ name: "Tana Tech Africa" }],
  openGraph: {
    title: "Contact Tana Tech Africa",
    description: "Reach out to discuss your digital project or ask us a question.",
    url: "https://tanatech.africa/contact",
    type: "website",
    images: [{ url: "/images/contact-meta.jpg", alt: "Contact banner" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tana Tech Africa",
    description: "We’d love to hear from you. Send us a message!",
    images: ["/images/contact-meta.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Have a project in mind or a question for our team? Reach out and we’ll get back to you.
        </p>
      </section>

      <section className="max-w-2xl mx-auto">
        <ContactForm />
      </section>
    </div>
  );
}
