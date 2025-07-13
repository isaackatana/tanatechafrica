// app/routes/blog.index.tsx
import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import { getAllPosts } from "~/utils/getPosts";

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  tags?: string[];
}

// SEO Meta
export const meta: MetaFunction = () => {
  return [
    { title: "Blog – Insights & Stories | Tana Tech Africa" },
    {
      name: "description",
      content:
        "Explore articles from Tana Tech Africa on web development, branding, tech trends, and digital strategies that empower African businesses.",
    },
    {
      name: "keywords",
      content:
        "Tana Tech blog, tech insights Africa, branding tips, web design Kenya, business strategy Africa, digital marketing",
    },
    { name: "author", content: "Tana Tech Africa" },
    { property: "og:title", content: "Blog – Tana Tech Africa" },
    { property: "og:description", content: "Latest tech, design, and digital business articles from Tana Tech Africa." },
    { property: "og:image", content: "/images/blog/blog-meta.jpg" }, // optional social preview
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://tanatech.africa/blog" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Tana Tech Africa Blog" },
    { name: "twitter:description", content: "Insights and ideas to grow your digital brand in Africa." },
    { name: "twitter:image", content: "/images/blog/blog-meta.jpg" }
  ];
};

// Loader
export const loader: LoaderFunction = async () => {
  const posts = getAllPosts();
  return json(posts);
};

export default function BlogIndexPage() {
  const posts = useLoaderData<Post[]>();

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
        {posts.map((post: Post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
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
              {post.tags?.map((tag: string) => (
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
