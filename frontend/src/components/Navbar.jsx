import React from "react";
import Radium from 'radium';
import {Link} from "react-router";
import {Navbar, Input, Glyphicon, Button,
  MenuItem, DropdownButton, Nav} from 'react-bootstrap';


import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink} = ReactRouterBootstrap;

var styles = {
  navbar: {
    background: "#404040",
    color: "#999",
    textAlign: "center",
    marginBottom: "0px"
  },
  link: {
    "padding-bottom": "1px",
    border: 0,
    color: "#999"
  }
};

const searchButton = <Glyphicon glyph='search' />;

class CustomNavbar extends React.Component {
  render() {
    return (
      <header className="Site-header">
        <Navbar
          style={[
            styles.navbar,
            this.props.style
          ]}
          brand="Alexandria"
          fluid={true}>
          <Nav>
            <form className="navbar-form" role="search">
              <Input type="text"
                addonBefore={searchButton}
                className="form-control"
                placeholder="Search"
                name="q"
              />
            </form>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Radium(CustomNavbar);
