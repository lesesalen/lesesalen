/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../queries/useSiteMetadata";

interface Props {
  description?: string;
  lang?: string;
  title: string;
}

const Seo: React.FC<Props> = ({ description, lang = "no", title }) => {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description ?? siteMetadata.description;
  const image = `${siteMetadata.siteUrl}/icons/icon-96x96.png`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: "name", content: title || siteMetadata.title },
        { name: `description`, content: metaDescription },
        { name: "image", content: image },

        { name: `twitter:card`, content: `summary` },
        { name: "twitter:site", content: `Lesesalen` },
        { name: `twitter:title`, content: title },
        { name: `twitter:description`, content: metaDescription },
        { name: `twitter:creator`, content: siteMetadata.author.name },
        { name: "twitter:image", content: image },

        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:url", content: siteMetadata.siteUrl },
        { property: "og:image", content: image },
        { property: "og:description", content: metaDescription },
        { property: "og:site_name", content: `Lesesalen` },
      ]}
    />
  );
};

export default Seo;
