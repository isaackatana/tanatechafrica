import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tana Tech Africa — Digital Solutions for Your Brand",
  description:
    "Tana Tech Africa offers website & mobile app development, social media management, print branding, and photography services.",
  keywords: ["digital agency", "website design", "mobile app development", "branding", "Kenya"],
  authors: [{ name: "Tana Tech Africa" }],
  openGraph: {
    title: "Tana Tech Africa",
    description: "Empowering African businesses with professional digital solutions.",
    url: "https://tanatech.africa",
    siteName: "Tana Tech Africa",
    images: [
      {
        url: "/meta-images/cp.png",
        width: 1200,
        height: 630,
        alt: "Tana Tech Africa Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <section className="space-y-16">
      {/* Hero Section */}
      <div className="text-center py-20 bg-gradient-to-r from-primary to-secondary text-white rounded-xl shadow-md">
        <h1 className="text-5xl font-extrabold">Tana Tech Africa</h1>
        <p className="mt-4 text-xl">
          Empowering brands with digital design, development & media
        </p>
      </div>

      {/* Services Preview */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard title="Web & Mobile Development" description="Custom websites and mobile apps tailored for your brand." />
          <ServiceCard title="Social Media Management" description="We build your presence and grow your audience." />
          <ServiceCard title="Print Branding" description="Logos, flyers, banners, and all your print needs." />
          <ServiceCard title="Photography" description="Professional brand photography for marketing and storytelling." />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white shadow p-6 rounded-lg text-left border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
