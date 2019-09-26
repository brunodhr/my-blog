import React from 'react'
import GlobalStyle from '../styles'
import { graphql } from 'gatsby'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/Seo'
import Post from 'components/Post'

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <GlobalStyle />
      <SEO title='All posts' />
      <Layout>
        <Bio />
        <div
          style={{
            flexWrap: `wrap`,
            width: `100%`,
            display: `flex`,
            justifyContent: `space-between`,
          }}
        >
          {posts.map(({ node }, index) => (
            <Post key={index} data={node} />
          ))}
        </div>
      </Layout>
    </>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
