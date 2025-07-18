// app/routes/services.tsx
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Services – Tana Tech Africa" },
    {
      name: "description",
      content:
        "Explore Tana Tech Africa's services: website and app development, branding, graphic design, social media marketing, and photography tailored for African businesses.",
    },
    {
      name: "keywords",
      content:
        "digital services Kenya, Tana Tech Africa, website development, branding, social media marketing, photography services Africa, creative agency",
    },
    { name: "author", content: "Tana Tech Africa" },
    { property: "og:title", content: "Digital Services by Tana Tech Africa" },
    { property: "og:description", content: "A wide range of creative and technical services to help African brands grow." },
    { property: "og:image", content: "/images/services/dev-placeholder.jpg" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://tanatech.africa/services" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Tana Tech Africa Services" },
    { name: "twitter:description", content: "Digital solutions including web development, branding, marketing, and photography." },
    { name: "twitter:image", content: "/images/services/dev-placeholder.jpg" }
  ];
};

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We provide a range of digital services designed to elevate your brand and connect with your audience.
        </p>
      </section>

      {/* Service Sections */}
      <section className="space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Website & App Development</h2>
            <p className="text-gray-700 dark:text-gray-300">
              From sleek business sites to powerful web applications, we use modern technologies to deliver responsive, secure, and high-performing digital platforms tailored to your goals.
            </p>
          </div>
          <img src="/images/services/dev-placeholder.jpg" alt="Web development" className="rounded-xl shadow-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Brand Identity & Graphic Design</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We craft unique visual identities including logos, color palettes, and brand guides that create lasting impressions and communicate your values clearly.
            </p>
          </div>
          <img src="/images/services/design-placeholder.jpg" alt="Branding" className="rounded-xl shadow-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Social Media Management & Marketing</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We help businesses grow and engage their online communities with content strategies, daily management, influencer marketing, and ad campaigns across platforms.
            </p>
          </div>
          <img src="/images/services/social-placeholder.jpg" alt="Social media marketing" className="rounded-xl shadow-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Photography & Digital Content Creation</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We produce high-quality photos and videos tailored for online platforms — ideal for products, people, places, and storytelling.
            </p>
          </div>
          <img src="/images/services/photography-placeholder.jpg" alt="Photography" className="rounded-xl shadow-md" />
        </div>
      </section>
    </div>
  );
}
