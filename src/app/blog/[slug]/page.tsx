import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    return { slug };
  });
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) return {};

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    title: `${data.title} | Tana Tech Africa`,
    description: data.excerpt || "",
    openGraph: {
      title: data.title,
      description: data.excerpt || "",
    },
    twitter: {
      title: data.title,
      description: data.excerpt || "",
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(postsDirectory, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 py-16">
      <h1>{data.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        {new Date(data.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {data.tags?.map((tag: string) => (
          <span
            key={tag}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full dark:bg-blue-800 dark:text-white"
          >
            #{tag}
          </span>
        ))}
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
