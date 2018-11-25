import React, { Component, Fragment } from "react";
import { inject, observer } from "mobx-react";
import { action, observable, reaction } from "mobx";
import DiscoList from "../components/DiscoList";
import DiscoService from "../../../services/DiscoService";

@inject("store")
@observer
class ListContainer extends Component {
  //observables that store the discolist and the loading status
  @observable discoList = [];
  @observable loadingList = false;

  store = this.props.store;

  //fetches with pagination the list of releases by artist
  @action
  fetchDiscoList = (artist, page) => {
    this.toggleLoading();
    DiscoService.fetchDiscoList(artist, page).then(response => {
      page === 1 //if first load, fills discoList. else, appends results to list
        ? this.setDiscoList(response)
        : this.appendDiscoList(response);
    });
  };

  @action
  setDiscoList(result) {
    this.discoList = result.releases;
    this.toggleLoading();
  }

  @action
  appendDiscoList(result) {
    if (result.releases)
      result.releases.map(release => this.discoList.push(release));
    this.toggleLoading();
  }

  @action
  toggleLoading() {
    this.loadingList = !this.loadingList;
  }

  //mobx reaction function that gets triggered when the selected artist changes
  reactToArtistSelection = reaction(
    () => this.store.discoStore.selectedArtist,
    artist => this.fetchDiscoList(artist.value, 1)
  );

  render() {
    return (
      <Fragment>
        {this.store.discoStore.selectedArtist.value && (
          <DiscoList
            discoList={this.discoList}
            loading={this.loadingList}
            artist={this.store.discoStore.selectedArtist}
            fetchDiscoList={(artist, page) => this.fetchDiscoList(artist, page)}
          />
        )}
      </Fragment>
    );
  }
}

export default ListContainer;
