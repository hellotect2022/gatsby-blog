import React from 'react'
import styled from '@emotion/styled'
import ProfileImage from 'components/Main/ProfileImage'

const Background = styled.div`
  width: 100%;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  color: #ffffff;
`

const Wrapper = styled.div`
  border-style: solid;
  line-width:2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 768px;
  height: 200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    padding: 0 20px;
  }
`
const Bio =styled.div`
  height: 200px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:0 20px;

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
    padding: 0 20px;
  }
`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Title = styled.div`
  margin-top: 5px;
  font-size: 35px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`

const Introduction = function () {
  return (
    <Background>
      <Wrapper>
        <ProfileImage />
        <Bio>
          <SubTitle>Nice to Meet You,</SubTitle>
          <Title>I'm Junior Frontend Developer Hyun.</Title>
        </Bio>
      </Wrapper>
    </Background>
  )
}

export default Introduction