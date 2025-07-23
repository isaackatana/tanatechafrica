// app/blog/page.tsx
import Link from "next/link";
import { getAllPosts } from "@/lib/getPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – Insights & Stories | Tana Tech Africa",
  description:
    "Explore articles from Tana Tech Africa on web development, branding, tech trends, and digital strategies that empower African businesses.",
  keywords:
    "Tana Tech blog, tech insights Africa, branding tips, web design Kenya, business strategy Africa, digital marketing",
  authors: [{ name: "Tana Tech Africa" }],
  openGraph: {
    title: "Blog – Tana Tech Africa",
    description: "Latest tech, design, and digital business articles from Tana Tech Africa.",
    url: "https://tanatech.africa/blog",
    type: "website",
    images: ["/images/blog/blog-meta.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tana Tech Africa Blog",
    description: "Insights and ideas to grow your digital brand in Africa.",
    images: ["/images/blog/blog-meta.jpg"],
  },
};

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  tags?: string[];
}

export default async function BlogPage() {
  const posts: Post[] = await getAllPosts();

  return (
    <div className="space-y-16">
      {/* Page Header */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Explore insights, tips, and trends in tech, branding, and business across Africa.
        </p>
      </section>

      {/* Blog List */}
      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.excerpt || "Read more..."}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full dark:bg-blue-800 dark:text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
