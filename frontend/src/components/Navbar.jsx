import React from "react";
import Radium from 'radium';
import {Link} from "react-router";

import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink} = ReactRouterBootstrap;

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

class CustomNavbar extends React.Component {

  render() {
    return (
      <header className="Site-header">
        <nav
          className="navbar navbar-default"
          style={[
            styles.navbar,
            this.props.style]}>
          <a className="navbar-brand" href="#"
            style={[styles.brand]} >
            Alexandria
          </a>
          <nav style={[styles.searchArea]}>
            <form className="navbar-form" role="search">
              <glyphicon glyph='search' />
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

export default Radium(CustomNavbar);
