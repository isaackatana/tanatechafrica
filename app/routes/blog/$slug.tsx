// app/routes/blog/$slug.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPostBySlug } from "~/utils/getPosts";

interface Post {
  slug: string;
  title: string;
  content: string; // this is HTML string from markdown
  date: string;
  tags?: string[];
}

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug;
  if (!slug) throw new Response("Not Found", { status: 404 });

  try {
    const post = getPostBySlug(slug);
    return json(post);
  } catch {
    throw new Response("Not Found", { status: 404 });
  }
};

export default function BlogPostPage() {
  const post = useLoaderData<Post>();

  return (
    <article className="max-w-3xl mx-auto py-16 px-4 space-y-6">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(post.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
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
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
