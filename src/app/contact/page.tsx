import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Tana Tech Africa",
  description: "Get in touch with Tana Tech Africa to discuss your project or ask questions.",
  openGraph: {
    title: "Contact Tana Tech Africa",
    description: "Contact Tana Tech Africa to discuss your project or ask questions.",
    url: "https://tanatech.africa/contact",
    siteName: "Tana Tech Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
    return (
      <section className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Reach out to Tana Tech Africa — we’re here to help your brand grow.
          </p>
        </div>
  
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/myzworwl" // <-- Replace with your Formspree URL
          method="POST"
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border p-3 rounded w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border p-3 rounded w-full"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="border p-3 rounded w-full"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="border p-3 rounded w-full"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90"
          >
            Send Message
          </button>
        </form>
  
        {/* Business Info */}
        <div className="text-center text-gray-700">
          <p><strong>Email:</strong> info@tanatechafrica.com</p>
          <p><strong>Phone:</strong> +254 743 195 701</p>
          <p><strong>Location:</strong> Mombasa, Kenya</p>
        </div>
      </section>
    );
  }
  