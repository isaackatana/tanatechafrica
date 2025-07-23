import groq from 'groq';

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    body
  }
`;
