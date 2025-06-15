import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Tana Tech Africa",
  description:
    "Check out our portfolio showcasing our work in website development, branding, and media projects.",
  openGraph: {
    title: "Tana Tech Africa Portfolio",
    description:
      "Our portfolio includes website development, branding, and media projects.",
    url: "https://tanatech.africa/portfolio",
    siteName: "Tana Tech Africa",
    locale: "en_US",
    type: "website",
  },
};

type Project = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "E-commerce Website",
    description: "A modern online store with product management and checkout.",
    image: "/portfolio/ecommerce.jpg",
    link: "#",
  },
  {
    title: "Photography Showcase",
    description: "Portfolio site for a freelance photographer.",
    image: "/portfolio/photography.jpg",
    link: "#",
  },
  {
    title: "Brand Identity Design",
    description: "Complete branding for a startup — logo, cards, banners.",
    image: "/portfolio/branding.jpg",
    link: "#",
  },
  {
    title: "Mobile Booking App",
    description: "A Flutter-based app for booking appointments on the go.",
    image: "/portfolio/mobile-app.jpg",
    link: "#",
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Our Portfolio</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-600 mt-2 inline-block hover:underline"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
