import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';
import LibraryStore from '../stores/LibraryStore';

var styles = {
  navbar: {
    background: "#404040",
    color: "#999",
    marginBottom: "0px",
    display: "flex"
  },
  searchArea: {
    marginLeft: "auto"
  },
  brand: {
    alignSelf: "flex-start"
  }
};

class Navbar extends React.Component {

  static propTypes = {
    libraries: React.PropTypes.array.isRequired
  };

  render() {
    const libraries = this.props.libraries;
    return (
      <header className="Site-header">
        <nav
          className="navbar navbar-default"
          style={[
            styles.navbar,
            this.props.style]}>
          <a className="navbar-brand" href="#"
             style={[styles.brand]}>
            Alexandria
          </a>
          <ul className="nav navbar-nav libraries">
            {libraries.map((lib) => {
              return (
                <li key={lib.id}>
                  <a>{lib.name}</a>
                </li>
              );
            })
            }
          </ul>
          <nav style={[styles.searchArea]}>
            <form className="navbar-form" role="search">
              <glyphicon glyph='search'/>
              <input type="text"
                     className="form-control"
                     placeholder="Search"
                     name="q"
                />
              <button className="btn btn-primary">Search</button>
            </form>
          </nav>
        </nav>
      </header>
    );
  }
}

export default Radium(Navbar);
