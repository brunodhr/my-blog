import React from 'react'
import Link from 'components/Link'

import * as S from './styles'

const Post = ({ data }) => {
  return (
    <S.Wrapper>
      <Link to={data.fields.slug}>
        <S.Container>
          <S.Header>
            <S.Title>{data.frontmatter.title}</S.Title>
            <small>{data.frontmatter.date}</small>
          </S.Header>
          <section>
            <p>{data.frontmatter.description || data.excerpt}</p>
          </section>
        </S.Container>
      </Link>
    </S.Wrapper>
  )
}

export default Post
