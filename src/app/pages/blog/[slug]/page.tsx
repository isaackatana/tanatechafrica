// app/blog/[slug]/page.tsx
import { sanity } from "../../../../lib/sanity";
import { singlePostQuery } from "../../../../lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await sanity.fetch(singlePostQuery, { slug: params.slug });
  if (!post) return {};

  return {
    title: `${post.title} - Blog | Tana Tech Africa`,
    description: post.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = await sanity.fetch(singlePostQuery, { slug: params.slug });
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full rounded-md shadow"
        />
      )}

      <div className="prose prose-blue max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}
