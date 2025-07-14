import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPostBySlug } from "~/utils/getPosts"; // Adjust to your actual path

interface Post {
  slug: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  coverImage?: string;
  tags?: string[];
}

export const loader: LoaderFunction = async ({ params }) => {
  const { slug } = params;
  if (!slug) throw new Response("Not Found", { status: 404 });

  const post = await getPostBySlug(slug);
  if (!post) throw new Response("Post Not Found", { status: 404 });

  return json(post);
};

// ✅ SEO meta function
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [{ title: "Post not found – Tana Tech Africa" }];
  }

  const { title, excerpt, slug, coverImage } = data;

  return [
    { title: `${title} – Tana Tech Africa` },
    {
      name: "description",
      content: excerpt || "Read this blog post on technology, branding, or business in Africa.",
    },
    { name: "author", content: "Tana Tech Africa" },
    { name: "keywords", content: data.tags?.join(", ") || "tech, branding, africa" },
    { property: "og:title", content: `${title} – Tana Tech Africa` },
    { property: "og:description", content: excerpt || "Explore this article from Tana Tech Africa." },
    { property: "og:image", content: coverImage || "/images/blog-meta.jpg" },
    { property: "og:type", content: "article" },
    { property: "og:url", content: `https://tanatech.africa/blog/${slug}` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: `${title} – Tana Tech Africa` },
    { name: "twitter:description", content: excerpt || "Tana Tech Africa blog article." },
    { name: "twitter:image", content: coverImage || "/images/blog-meta.jpg" }
  ];
};

export default function BlogPostPage() {
  const post = useLoaderData<Post>();

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        {new Date(post.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="rounded-xl shadow mb-8"
        />
      )}
      <section
        className="text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
