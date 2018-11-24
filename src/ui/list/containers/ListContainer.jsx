import React, { Component } from "react";
import {inject, observer} from "mobx-react"
import {action, observable} from "mobx"
import DiscoList from "../components/DiscoList";
import DiscoService from "../../../services/DiscoService"

@inject("store")
@observer
class ListContainer extends Component {
    constructor(props) {
        super(props)
        this.fetchDiscoList()
    }

    @observable discoList = []
    @observable dataReady = false

    store = this.props.store

    @action
    fetchDiscoList(){
        DiscoService.fetchDiscoList("Nirvana").then(
            response => this.setDiscoList(response)
        )
    }

    @action
    setDiscoList(result){
        this.discoList = result.results
        this.dataReady = true
    }

    render() {
        return (
            <div>
                {this.store.discoStore.selectedArtist.value && <DiscoList discoList={this.discoList}/>}
            </div>
        )
    }
}

export default ListContainer