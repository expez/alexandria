import alt from '../alt';
import LibraryActions from '../actions/LibraryActions';

class LibraryStore {

  constructor() {
    this.bindActions(LibraryActions);
    this.libraries = [];
    LibraryActions.fetchLibraries();
  }

  fetchLibraries(libraries) {
    console.log('fetch:' + libraries)
    this.libraries = libraries;
  }
}

export default alt.createStore(LibraryStore)
