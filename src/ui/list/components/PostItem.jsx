import React from "react"
import styled from "styled-components"

const Item = styled.div`
  width: 300px;
  padding: 20px;
    margin: auto;
    &:nth-child(odd){
      background: lightblue;
    }
    &:nth-child(even){
      background: lightyellow;
    }
`

const Title = styled.h3`
  text-align: center;
`

const Description = styled.p``

const PostId = styled.div`
  position: absolute;
`

const PostItem = post => {
    return (
        <Item key={post.id}>
            <Title>
                {post.title}
            </Title>
            <Description>
                {post.body}
            </Description>
            <PostId>
                {post.id}
            </PostId>
        </Item>
    )
}

export default PostItem