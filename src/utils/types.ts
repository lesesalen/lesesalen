export interface Node {
  excerpt: string;
  fields: { slug: string };
  frontmatter: {
    date: string;
    title: string;
    description: string;
    tags: string;
    important: boolean;
  };
}
