/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title }) => {
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

  const metaDescription = description || site.siteMetadata.description;
  const image = `${site.siteMetadata.siteUrl}/icons/icon-96x96.png`;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { itemprop: "name", content: title || site.siteMetadata.title },
        { itemprop: "description", content: metaDescription },
        { itemprop: "image", content: image },
        { name: `description`, content: metaDescription },

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

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
