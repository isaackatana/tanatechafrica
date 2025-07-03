// app/routes/_index.tsx
import { Link } from "@remix-run/react";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Empowering African Brands with Digital Innovation</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          We design and develop websites, mobile apps, and branding solutions that help businesses stand out.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Get a Free Consultation
        </Link>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Tana Tech Africa</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Based in Kenya, Tana Tech Africa is a full-service digital agency focused on delivering impactful solutions through creative design, scalable development, and authentic storytelling. We serve startups, small businesses, and organizations across Africa and beyond.
          </p>
        </div>
        <img
          src="/images/about-placeholder.jpg"
          alt="About Tana Tech Africa"
          className="rounded-xl shadow-md"
        />
      </section>

      {/* Services Preview Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-8">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-900">
            <h3 className="text-lg font-semibold mb-2">Website & App Development</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Custom websites, progressive web apps, and mobile apps designed for performance and scalability.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-900">
            <h3 className="text-lg font-semibold mb-2">Brand Identity & Design</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Logos, business cards, company profiles, and digital assets that align with your mission.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-900">
            <h3 className="text-lg font-semibold mb-2">Social Media & Marketing</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Strategic content creation, account management, and ad campaigns that drive engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-50 dark:bg-blue-900 py-12 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Let’s build something amazing together</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Schedule a free consultation to see how we can help your business grow online.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
