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
    <section className="space-y-20 px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center text-white rounded-xl shadow-md sliding-bg">
        <div className="bg-black/60 px-6 sm:px-10 py-12 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Tana Tech Africa
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
            Empowering brands with digital design, development & media
          </p>
        </div>
      </div>

      {/* Services Preview */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
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
    <div className="bg-white shadow-md hover:shadow-xl transition duration-300 p-6 rounded-2xl text-left border border-gray-100">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
}
