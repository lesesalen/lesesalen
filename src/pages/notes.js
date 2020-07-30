import React from "react"
import { Link, graphql } from "gatsby"

// import Bio from "../components/bio" TODO: same as below
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"
import Card from "../components/blogpostCard"
import styled from "styled-components"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  const StyledLink = styled(Link)`
    box-shadow: none;
  `
  const StyledH2 = styled.h2`
    margin-top: 0px;
  `

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <Bio />  TODO: Uncomment this after making a working bio component*/}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        const tags = node.frontmatter.tags
        return (
          <Card>
            <article key={node.fields.slug}>
              <small>{node.frontmatter.date}</small>
              {tags && tags.length > 0 ? ` - ` : ``}
              <Tags>{tags}</Tags>
              <StyledH2>
                <StyledLink to={node.fields.slug}>{title}</StyledLink>
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
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
query {

  site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fileAbsolutePath: {regex: "/notes/"}}) {
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
        }
      }
    }
  }
}
`
