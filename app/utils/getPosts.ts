// app/utils/getPosts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "app/posts");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
    const { data } = matter(file);
    return { slug, ...data };
  });
}

export function getPostBySlug(slug: string) {
  const filepath = path.join(postsDir, `${slug}.md`);
  const file = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(file);
  const html = marked(content);
  return { ...data, slug, content: html };
}
