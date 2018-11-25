import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { action, observable } from "mobx";
import Searchbar from "../components/Searchbar";
import DiscoService from "../../../services/DiscoService";
import _ from "lodash";

// makes store available
@inject("store")
@observer
class SearchbarContainer extends Component {
  store = this.props.store;
  @observable artistsList = [];

  //calls debounced function
  @action
  fetchArtistsList(query) {
    this.fetchFromAPI(query);
  }

  //gives some time to user type the search term
  fetchFromAPI = _.debounce(query => {
    if (query)
      DiscoService.fetchArtistsList(query).then(response => {
        this.setArtistsList(response.results);
      });
  }, 500);

  //sets the react-select values
  @action
  setArtistsList(list) {
    this.artistsList = list.map(item => {
      return {
        value: item.id,
        label: item.title
      };
    });
  }

  //saves the selected artist on the store
  @action
  setSelectedArtist(artist) {
    this.store.discoStore.setSelectedArtist(artist);
  }

  render() {
    return (
      <Searchbar
        artistsList={this.artistsList}
        setSelectedArtist={artist => this.setSelectedArtist(artist)}
        fetchArtistsList={query => this.fetchArtistsList(query)}
      />
    );
  }
}

export default SearchbarContainer;
