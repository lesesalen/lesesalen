/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

interface Props {
  description?: string;
  lang?: string;
  title: string;
}

const Seo: React.FC<Props> = ({ description, lang = "no", title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author {
              name
            }
          }
        }
      }
    `
  );

  const metaDescription = description ?? site.siteMetadata.description;
  const image = `${site.siteMetadata.siteUrl}/icons/icon-96x96.png`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: "name", content: title || site.siteMetadata.title },
        { name: `description`, content: metaDescription },
        { name: "image", content: image },

        { name: `twitter:card`, content: `summary` },
        { name: "twitter:site", content: `Lesesalen` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:creator`, content: site.siteMetadata.author.name },
        { name: "twitter:image", content: image },

        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:url", content: site.siteMetadata.siteUrl },
        { property: "og:image", content: image },
        { property: "og:description", content: metaDescription },
        { property: "og:site_name", content: `Lesesalen` },
      ]}
    />
  );
};

export default Seo;
