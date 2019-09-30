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
      <span>Outros posts</span>
      <S.Nav>
        <S.Arrows>
          {previous && (
            <S.Link
              to={previous.fields.slug}
              cover
              direction='down'
              duration={1}
              rel='prev'
              bg={'#505050'}
            >
              {previous.frontmatter.title}
            </S.Link>
          )}
        </S.Arrows>
        <S.Arrows>
          {next && (
            <S.Link
              to={next.fields.slug}
              cover
              direction='down'
              duration={1}
              rel='next'
              bg={'#505050'}
            >
              {next.frontmatter.title}
            </S.Link>
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
