import React, {Component, Fragment} from "react"
import { inject, observer } from "mobx-react";
import SearchbarContainer from "../../searchbar/containers/SearchbarContainer"
import ListContainer from "../../list/containers/ListContainer"
import styled from "styled-components"

const App = () => {
    return(
        <Fragment>
            <SearchbarContainer/>
            <ListContainer/>
        </Fragment>
    )
}

export default App