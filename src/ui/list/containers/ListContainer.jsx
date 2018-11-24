import React, { Component } from "react";
import {  observer } from "mobx-react";
import { action, observable } from "mobx";
import DiscoList from "../components/DiscoList";
import DiscoService from "../../../services/DiscoService"

@observer
class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.fetchDiscoList()
    }

    @observable discoList = []
    @observable dataReady = false

    @action
    fetchDiscoList(){
        DiscoService.fetchDiscoList("Nirvana").then(
            response => this.setDiscoList(response)
        )
    }

    @action
    setDiscoList(result){
        this.discoList = result.results
        console.log(result)
        this.dataReady = true
    }

    render() {
        return (
            <DiscoList discoList={this.discoList} ready={this.dataReady}/>
        )
    }
}

export default ListContainer