import React from 'react'
import { graphql } from 'gatsby'
import GlobalStyle from '../styles'

import Bio from 'components/Bio'
import Layout from 'components/Layout'
import SEO from 'components/Seo'

import * as S from './styles'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <>
        <GlobalStyle />
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
            <hr />
            <footer>
              <Bio />
            </footer>
          </article>

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
        </Layout>
      </>
    )
  }
}

export default BlogPostTemplate

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
