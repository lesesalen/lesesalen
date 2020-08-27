import { useStaticQuery, graphql } from "gatsby";

interface SiteMetadata {
  siteUrl: string;
  title: string;
  description: string;
  author: {
    name: string;
    summary: string;
  };
}

export const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          author {
            name
            summary
          }
        }
      }
    }
  `);

  return site.siteMetadata;
};
