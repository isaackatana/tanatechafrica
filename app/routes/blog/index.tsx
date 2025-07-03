// app/routes/blog/index.tsx
import { Link } from "@remix-run/react";

const blogPosts = [
  {
    slug: "scaling-your-business-online",
    title: "Scaling Your Business Online in Africa",
    excerpt: "Learn how African businesses are leveraging digital tools to grow faster.",
    date: "2025-06-15",
    tags: ["growth", "digital", "africa"],
  },
  {
    slug: "brand-identity-tips",
    title: "Top 5 Tips to Build a Memorable Brand Identity",
    excerpt: "Your brand is more than just a logo — here's how to make it unforgettable.",
    date: "2025-06-10",
    tags: ["branding", "identity", "design"],
  },
  {
    slug: "social-media-trends-2025",
    title: "Social Media Trends to Watch in 2025",
    excerpt: "What's hot and what's not on African social media platforms this year.",
    date: "2025-06-05",
    tags: ["social", "marketing", "trends"],
  },
];

export default function BlogIndexPage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Explore insights, tips, and trends in tech, branding, and business across Africa.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {blogPosts.map((post) => (
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
            <p className="text-gray-700 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
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
