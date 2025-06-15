import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Tana Tech Africa",
  description: "Learn about Tana Tech Africa — our mission, vision, and team.",
  openGraph: {
    title: "About Tana Tech Africa",
    description: "Learn about Tana Tech Africa — our mission, vision, and team.",
    url: "https://tanatech.africa/about",
    siteName: "Tana Tech Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <section className="space-y-12">
      {/* Company Overview */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Tana Tech Africa</h1>
        <p className="text-gray-700 text-lg">
          At Tana Tech Africa, we empower businesses and brands by delivering premium digital
          services that drive growth and visibility. From websites and apps to content and
          branding — we help you stand out in the digital world.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To provide high-quality digital solutions that empower African businesses to compete
            globally with confidence and creativity.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be Africa&rsquo;s leading digital agency — trusted for innovation, reliability, and
            results-driven design and media services.
          </p>
        </div>
      </div>

      {/* Optional: Founder/Team message */}
      <div className="max-w-3xl mx-auto text-center text-gray-600">
        <p>
          We believe in storytelling through design, technology, and creativity. Whether you&rsquo;re a
          startup or a growing brand, we&rsquo;re here to help you build something remarkable.
        </p>
      </div>
    </section>
  );
}
