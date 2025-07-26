// Get all posts
export async function getAllPosts() {
  const res = await fetch(`${process.env.STRAPI_API_URL}/posts?sort[0]=date:desc&populate=coverImage`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    next: { revalidate: 60 },
  });

  const json = await res.json();
  return json.data.map((post: any) => ({
    slug: post.attributes.slug,
    title: post.attributes.title,
    date: post.attributes.date,
    coverImage: post.attributes.coverImage?.data?.attributes?.url ?? null,
  }));
}

// Get a single post by slug
export async function getPostBySlug(slug: string) {
  const res = await fetch(`${process.env.STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&populate=coverImage,tags`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    },
    next: { revalidate: 60 },
  });

  const json = await res.json();
  const post = json.data?.[0];

  if (!post) return null;

  return {
    title: post.attributes.title,
    content: post.attributes.content,
    date: post.attributes.date,
    coverImage: post.attributes.coverImage?.data?.attributes?.url ?? null,
    tags: post.attributes.tags?.data.map((tag: any) => tag.attributes.name) ?? [],
  };
}
