// app/routes/blog/$slug.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

const blogPosts = [
  {
    slug: "scaling-your-business-online",
    title: "Scaling Your Business Online in Africa",
    content: `Digital transformation is not just a buzzword — it's a key to sustainable growth in Africa. In this post, we explore platforms, marketing channels, and tools local businesses can leverage to scale online.\n\nFrom e-commerce to mobile-first strategies, discover what it takes to build a strong digital presence in a rapidly growing market.`,
    date: "2025-06-15",
    tags: ["growth", "digital", "africa"],
  },
  {
    slug: "brand-identity-tips",
    title: "Top 5 Tips to Build a Memorable Brand Identity",
    content: `Your brand identity speaks before you do. Learn how to define your mission, design visuals that resonate, and remain consistent across touchpoints.\n\nWhether you're a startup or a rebranding SME, these tips will help you create a lasting impression.`,
    date: "2025-06-10",
    tags: ["branding", "identity", "design"],
  },
  {
    slug: "social-media-trends-2025",
    title: "Social Media Trends to Watch in 2025",
    content: `Video content, micro-influencers, and authentic storytelling are reshaping African digital marketing.\n\nWe break down what’s trending, what’s fading, and how you can stay ahead of the curve.`,
    date: "2025-06-05",
    tags: ["social", "marketing", "trends"],
  },
];

export const loader: LoaderFunction = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) throw new Response("Post Not Found", { status: 404 });
  return json(post);
};

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return [{ title: "Post not found" }];
  return [
    { title: `${data.title} | Tana Tech Africa Blog` },
    {
      name: "description",
      content: `${data.content.slice(0, 150)}...`,
    },
  ];
};

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <article className="max-w-3xl mx-auto py-16 space-y-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(post.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
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
      <div className="prose dark:prose-invert max-w-none whitespace-pre-line">
        {post.content}
      </div>
    </article>
  );
}
