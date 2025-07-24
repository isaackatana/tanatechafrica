// src/app/portfolio/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio – Tana Tech Africa",
  description:
    "Discover a showcase of Tana Tech Africa's past projects, including web development, branding, social media campaigns, and photography.",
  keywords:
    "Tana Tech Africa portfolio, African digital agency, web design examples, branding case studies, digital marketing Kenya",
  authors: [{ name: "Tana Tech Africa" }],
  openGraph: {
    title: "Tana Tech Africa Portfolio",
    description: "A collection of successful digital projects by Tana Tech Africa.",
    url: "https://tanatech.africa/portfolio",
    type: "website",
    images: [
      {
        url: "/meta-images/portfolio-meta.jpg",
        alt: "Portfolio Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tana Tech Africa Portfolio",
    description: "See how we’ve helped African brands grow online.",
    images: ["/images/portfolio/portfolio-1.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="space-y-16">
      {/* Page Header */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Our Work</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore a selection of past projects we've completed for our clients — from web platforms and branding to social content and photography.
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="group relative overflow-hidden rounded-xl shadow-md border bg-white dark:bg-gray-900"
          >
            <img
              src={`/images/portfolio/portfolio-${item}.jpg`}
              alt={`Project ${item}`}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-sm">
              <h3 className="font-semibold">Project Title {item}</h3>
              <p className="text-xs">Short project description goes here.</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
