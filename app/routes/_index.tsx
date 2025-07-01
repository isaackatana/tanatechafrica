import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/index/HeroSection";
import ServicesSection from "~/components/services/ServicesSection";

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
      content:
        "Empowering African businesses with professional digital solutions.",
    },
    { property: "og:url", content: "https://tanatech.africa" },
    { property: "og:site_name", content: "Tana Tech Africa" },
    { property: "og:image", content: "/meta-images/plain-cp.webp" },
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
      <HeroSection />
      <ServicesSection />
    </section>
  );
}
