import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { action, observable } from "mobx";
import Searchbar from "../components/Searchbar";

@inject("store")
@observer
class SearchbarContainer extends Component {
  @observable query = "";

  store = this.props.store;

  @action
  setQuery(query) {
    this.query = query;
  }

  render() {
    console.log(this.store);
    return <Searchbar setQuery={query => this.setQuery(query)} />;
  }
}

export default SearchbarContainer;
