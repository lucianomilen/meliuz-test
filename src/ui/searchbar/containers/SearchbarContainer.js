import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { action, observable } from "mobx";
import Searchbar from "../components/Searchbar";
import DiscoService from "../../../services/DiscoService";
import _ from "lodash";

@inject("store")
@observer
class SearchbarContainer extends Component {
  store = this.props.store;
  @observable artistsList = [];

  @action
  fetchArtistsList(query) {
    this.fetchFromAPI(query);
  }

  fetchFromAPI = _.debounce(query => {
    DiscoService.fetchArtistsList(query).then(response => {
      this.setArtistsList(response.results);
    });
  }, 500);

  @action
  setArtistsList(list) {
    this.artistsList = list.map(item => {
      return {
        value: item.title,
        label: item.title
      };
    });
  }

  @action
  setSelectedArtist(artist) {
    this.store.discoStore.setSelectedArtist(artist);
  }

  render() {
    return (
      <Searchbar
        artistsList={this.artistsList}
        setSelected={artist => this.setSelectedArtist(artist)}
        fetchArtistsList={query => this.fetchArtistsList(query)}
      />
    );
  }
}

export default SearchbarContainer;
