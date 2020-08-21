import React from "react";
import { Link, graphql } from "gatsby";
import TableOfContents from "../components/TableOfContents";
import { device } from "../utils/devices";
import { MDXRenderer } from "gatsby-plugin-mdx";
import styled from "styled-components";

// import Bio from "../components/bio"
import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm, scale } from "../utils/typography";

const Toc = styled.ul`
  background-color: white;
  z-index: 5;
  @media ${device.mobileS} {
    position: sticky;
    margin: 0 auto;
    top: 64px;
    max-height: 50vh;
    display: flex;
    border-bottom: 1px solid black;
  }
  @media ${device.laptop} {
    position: fixed;
    left: calc(50% + 360px);
    top: 64px;
    max-height: 70vh;
    width: 15%;
    border: 0;
  }
`;

const InnerScroll = styled.div`
  width: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
  }
  scrollbar-color: gray;
  scrollbar-width: thin;
`;

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const tocData = data.mdx;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      {/*TODO: This render method needs investigating*/}
      {tocData?.tableOfContents?.items && (
        <Toc>
          <InnerScroll>
            <TableOfContents items={tocData.tableOfContents.items} />
          </InnerScroll>
        </Toc>
      )}
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1)
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <footer>
          {/* <Bio /> TODO: Same as the other bio, we need to fix the bio component*/}
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      tableOfContents(maxDepth: 5)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
