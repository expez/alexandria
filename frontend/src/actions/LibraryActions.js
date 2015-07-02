import alt from '../alt';

class LibraryActions {
  fetchLibraries() {
    window.fetch('http://localhost:8081/libraries')
      .then((response) => response.json())
      .then((libraries) => {
        this.dispatch(libraries);
      });
  }
}

export default alt.createActions(LibraryActions)
