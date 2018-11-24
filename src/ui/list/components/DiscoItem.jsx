import React from "react"
import styled from "styled-components"

const Item = styled.div`
  width: 70%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin: auto;
  background: #fff;
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
  cursor:pointer;
  &:hover {
    background: #edf4fd;
  }
`

const ImageTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 90px;
`

const Title = styled.div`
  padding-left: 20px;
  font-weight: 500;
  font-size: 1.1em;
`

const Year = styled.div`
  color: rgb(134,133,133);
  font-size: 13px;
  font-weight: bold;
`


const DiscoItem = disco => {
    return (
        <Item key={disco.id}>
            <ImageTitleContainer>
                <Image src={disco.thumb} alt=""/>
                <Title>
                    {disco.title}
                </Title>
            </ImageTitleContainer>
            <Year>
                {disco.year}
            </Year>
        </Item>
    )
}

export default DiscoItem