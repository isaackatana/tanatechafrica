// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.metadata.title} - Blog | Tana Tech Africa`,
    description: post.metadata.description,
  };
}

function getPostBySlug(slug: string) {
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    metadata: data as { title: string; date: string; description: string },
    content,
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 space-y-6">
      <h1 className="text-3xl font-bold">{post.metadata.title}</h1>
      <p className="text-gray-500 text-sm">{post.metadata.date}</p>
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      />
    </article>
  );
}
