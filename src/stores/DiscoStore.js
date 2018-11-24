import { action, observable } from "mobx";

export default class DiscoStore {
  @observable selectedArtist = {};

  @action
  setSelectedArtist(artist) {
    this.selectedArtist = artist;
  }
}
