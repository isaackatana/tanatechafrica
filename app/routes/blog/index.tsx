// app/routes/blog.index.tsx
import { Link, useLoaderData } from "@remix-run/react";
import { json, LoaderFunction } from "@remix-run/node";
import { getAllPosts } from "~/utils/getPosts";

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  date: string;
  tags?: string[];
}

export const loader: LoaderFunction = async () => {
  const posts = getAllPosts();
  return json(posts);
};

export default function BlogIndexPage() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="space-y-16">
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Explore insights, tips, and trends in tech, branding, and business across Africa.
        </p>
      </section>

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
