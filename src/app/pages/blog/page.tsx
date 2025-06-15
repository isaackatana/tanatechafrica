// app/blog/page.tsx
import { sanity } from "../../../lib/sanity";
import { allPostsQuery } from "../../../lib/queries";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await sanity.fetch(allPostsQuery);

  return (
    <section className="max-w-3xl mx-auto py-12 space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600">Latest updates from Tana Tech Africa.</p>
      </div>

      <div className="space-y-8">
        {posts.map((post: any) => (
          <div key={post._id} className="border-b pb-6">
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500">
              {new Date(post.publishedAt).toDateString()}
            </p>
            <p className="text-gray-700 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
