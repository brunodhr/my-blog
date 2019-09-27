import React from 'react'
import { graphql } from 'gatsby'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/Seo'

import * as S from './styles'

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <hr />

      <S.Nav>
        <S.Arrows>
          {previous && (
            <S.StyledLink to={previous.fields.slug} rel='prev'>
              ← {previous.frontmatter.title}
            </S.StyledLink>
          )}
        </S.Arrows>
        <S.Arrows>
          {next && (
            <S.StyledLink to={next.fields.slug} rel='next'>
              {next.frontmatter.title} →
            </S.StyledLink>
          )}
        </S.Arrows>
      </S.Nav>
      <Bio />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
