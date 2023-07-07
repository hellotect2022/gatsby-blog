import styled from '@emotion/styled'
import React, { createRef, useEffect } from 'react'


const src = 'https://utteranc.es/client.js'
const repo = 'hellotect2022.github.io' // 자신 계정의 레포지토리로 설정


const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

const CommentWidget = function () {
  const element = createRef()

  useEffect(() => {
    if (element.current === null) return

    const utterances = document.createElement('script')

    const attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <UtterancesWrapper ref={element} />
}

export default CommentWidget