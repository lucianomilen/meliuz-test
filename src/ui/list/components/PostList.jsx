import React, {Fragment} from 'react'
import PostItem from "./PostItem"
import styled from "styled-components"

const Header = styled.h3`
  text-align: center;
`
const ListContainer = styled.div`
  width: 60%;
  margin: auto;
`
const PostList = (props) => {
    return (
        props.ready &&
        <Fragment>
            <Header>Post List</Header>
            <ListContainer>
                {props.postList.map(
                    post => PostItem(post)
                )}
            </ListContainer>
        </Fragment>
    )
}

export default PostList