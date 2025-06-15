import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Tana Tech Africa",
  description:
    "Explore our range of digital services including website and mobile app design, social media management, print branding, and photography.",
  openGraph: {
    title: "Tana Tech Africa Services",
    description:
      "Website and app design, social media management, print branding, and photography services.",
    url: "https://tanatech.africa/services",
    siteName: "Tana Tech Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function ServicesPage() {
    const services = [
      {
        title: "Website Design & Development",
        description: "We create fast, responsive, and beautiful websites tailored to your business needs.",
      },
      {
        title: "Mobile App Development",
        description: "We build mobile solutions that work seamlessly across Android and iOS.",
      },
      {
        title: "Social Media Management",
        description: "Grow your audience and stay connected with smart content strategy and posting.",
      },
      {
        title: "Print Branding",
        description: "Logos, business cards, flyers, and more — designed to impress.",
      },
      {
        title: "Photography",
        description: "We offer professional photography services to capture your brand in the best light.",
      },
    ];
  
    return (
      <section className="space-y-8">
        <h1 className="text-3xl font-bold text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  