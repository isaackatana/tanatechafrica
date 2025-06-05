// app/blog/page.tsx
import { getAllPosts } from "./lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Blog - Tana Tech Africa",
  description: "Insights, tips, and updates from Tana Tech Africa.",
  openGraph: {
    title: "Blog - Tana Tech Africa",
    description: "Explore insights, updates, and tech tips from our team.",
    url: "https://tanatech.africa/blog",
    siteName: "Tana Tech Africa",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="max-w-3xl mx-auto space-y-12 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600">
          Stay updated with the latest from Tana Tech Africa.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map(({ slug, metadata }) => (
          <div key={slug} className="border-b pb-6">
            <Link href={`/blog/${slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {metadata.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">{metadata.date}</p>
            <p className="text-gray-700 mt-2">{metadata.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
