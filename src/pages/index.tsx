import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

// import Bio from "../components/bio" TODO: same as below
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Tags from "../components/Tags";
import Card from "../components/Card";
import styled from "styled-components";
import { useSiteMetadata } from "../queries/useSiteMetadata";
import { Node } from "../utils/types";

const StyledLink = styled(Link)`
  box-shadow: none;
`;

const StyledH2 = styled.h2`
  margin-top: 0;
`;

const StyledTags = styled(Tags)<{ important: boolean }>`
  color: ${({ important }) => (important ? "white" : "gray")};
`;

interface Props {
  location: Record<string, string>;
}

const BlogIndex: React.FC<Props> = ({ location }) => {
  const query = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { slug: { ne: "about" } }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "DD MMMM, YYYY")
                title
                description
                tags
                important
              }
            }
          }
        }
      }
    `
  );
  const siteTitle = useSiteMetadata().title;
  const posts = query.allMdx.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio />  TODO: Uncomment this after making a working bio component*/}
      {posts.map(({ node }: { node: Node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const tags = node.frontmatter.tags;
        const important = node.frontmatter.important;
        return (
          <Card important={important} big>
            <article key={node.fields.slug}>
              <small>{node.frontmatter.date}</small>
              {tags && tags.length > 0 ? ` - ` : ``}
              <StyledTags important={important} tags={tags} />
              <StyledH2>
                <StyledLink
                  to={node.fields.slug}
                  style={{
                    color: important ? "white" : "black",
                    textDecorationColor: important ? "white" : "black",
                  }}
                >
                  {title}
                </StyledLink>
              </StyledH2>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          </Card>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;
