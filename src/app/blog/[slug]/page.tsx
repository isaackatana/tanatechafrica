import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Markdown from "markdown-to-jsx";

interface PostProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }: PostProps) {
  const post = getPostData(params.slug);

  if (!post) return {};

  return {
    title: post.data.title,
    description: post.data.excerpt,
    openGraph: {
      title: post.data.title,
      description: post.data.excerpt,
    },
    twitter: {
      title: post.data.title,
      description: post.data.excerpt,
    },
  };
}

function getPostData(slug: string) {
  const fullPath = path.join(process.cwd(), "content/blog", `${slug}.md`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

export default function BlogPostPage({ params }: PostProps) {
  const post = getPostData(params.slug);

  if (!post) return notFound();

  const { data, content } = post;

  return (
    <article className="prose prose-neutral dark:prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1>{data.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(data.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <Markdown>{content}</Markdown>
    </article>
  );
}
