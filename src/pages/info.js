import React from 'react'
import { graphql,Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

const InfoPage = function ({
    data: {
        site: {
          siteMetadata: { title, description, author },
        },
    },
}) {
  return (
    <div>
        <Global styles={globalStyle} />
        <div css={TextStyle}>{title}</div>
        <Text1 disable={false}>{description}</Text1>
        <Text2 disable={true}>{author}</Text2>
      <ul>
        <li><a href="/">To Main</a></li>
        <li><Link to="/">To Main</Link></li>
      </ul>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`
const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`
// Kebab Case 적용
const Text1 = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

// Camel Case 적용
const Text2 = styled('div')(({ disable }) => ({
    fontSize: '15px',
    color: 'blue',
    textDecoration: disable ? 'line-through' : 'none',
  }))