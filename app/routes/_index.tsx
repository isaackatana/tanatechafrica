import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tana Tech Africa — Digital Solutions for Your Brand" },
    {
      name: "description",
      content:
        "Tana Tech Africa offers website & mobile app development, social media management, print branding, and photography services.",
    },
    {
      name: "keywords",
      content:
        "digital agency, website design, mobile app development, branding, Kenya",
    },
    { property: "og:title", content: "Tana Tech Africa" },
    {
      property: "og:description",
      content: "Empowering African businesses with professional digital solutions.",
    },
    { property: "og:url", content: "https://tanatech.africa" },
    { property: "og:site_name", content: "Tana Tech Africa" },
    { property: "og:image", content: "/meta-images/cp.png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Tana Tech Africa Logo" },
    { property: "og:locale", content: "en_US" },
    { property: "og:type", content: "website" },
  ];
};

export default function Index() {
  return (
    <section className="space-y-16 p-8">
      {/* Hero Section */}
      <div className="text-center text-white rounded-xl shadow-md sliding-bg">
        <div className="bg-black/60 p-10 rounded-lg">
          <h1 className="text-5xl font-extrabold">Tana Tech Africa</h1>
          <p className="mt-4 text-xl">
            Empowering brands with digital design, development & media
          </p>
        </div>
      </div>

      {/* Services Preview */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="Web & Mobile Development"
            description="Custom websites and mobile apps tailored for your brand."
          />
          <ServiceCard
            title="Social Media Management"
            description="We build your presence and grow your audience."
          />
          <ServiceCard
            title="Print Branding"
            description="Logos, flyers, banners, and all your print needs."
          />
          <ServiceCard
            title="Photography"
            description="Professional brand photography for marketing and storytelling."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white shadow p-6 rounded-lg text-left border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
