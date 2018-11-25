import React, { Component } from "react";
import {inject, observer} from "mobx-react"
import {action, observable} from "mobx"
import DiscoList from "../components/DiscoList";
import DiscoService from "../../../services/DiscoService"
import _ from "lodash";

@inject("store")
@observer
class ListContainer extends Component {
    constructor(props) {
        super(props)
    }

    @observable discoList = []

    store = this.props.store

    @action
    fetchDiscoList = _.once((artist) => {
        DiscoService.fetchDiscoList(artist).then(
            response => this.setDiscoList(response)
        )
    })

    @action
    setDiscoList(result){
        console.log(result)
        this.discoList = result.releases
    }

    render() {
        return (
            <div>
                {this.store.discoStore.selectedArtist.value &&
                <DiscoList
                    discoList={this.discoList}
                    artist={this.store.discoStore.selectedArtist.value}
                    ready={this.dataReady}
                    fetchDiscoList={artist => this.fetchDiscoList(artist)}/>
                }
            </div>
        )
    }
}

export default ListContainer