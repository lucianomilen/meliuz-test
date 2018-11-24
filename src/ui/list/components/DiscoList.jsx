import React, {Fragment} from 'react'
import DiscoItem from "./DiscoItem"
import styled from "styled-components"

const ListContainer = styled.div`
  margin: auto;
`

const LoadMoreBtn = styled.button`
  border-radius: 20px;
  background: #549ae6;
  color: #fff;
  display: flex;
  cursor: pointer;
  margin: 20px auto;
  width: 120px;
    font-size: 13px;
    justify-content: center;
    height: 35px;
    font-weight: 500;
    &:hover {
        background: #4a88cb;
    }
`

const DiscoList = (props) => {
    return (
        <Fragment>
            <ListContainer>
                {props.discoList.map(
                    disco => DiscoItem(disco)
                )}
            </ListContainer>
            <LoadMoreBtn>
                LOAD MORE
            </LoadMoreBtn>
        </Fragment>
    )
}

export default DiscoList