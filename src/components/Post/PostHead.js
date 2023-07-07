import React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const BackgroundImage = styled((props) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
z-index: -1;
width: 100%;
height: 400px;
object-fit: cover;
filter: brightness(0.25);

@media (max-width: 768px) {
  height: 300px;
}
`

const PostHead= function ({
  thumbnail,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeadWrapper>
  )
}

export default PostHead