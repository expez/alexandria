import React from "react";
import Radium from 'radium';


import ReactRouterBootstrap from 'react-router-bootstrap';
var {NavItemLink, ButtonLink} = ReactRouterBootstrap;

var styles = {
  Editor: {
    backgroundColor: "#404040",
    width: "100%"
  }
};

class Editor extends React.Component {
  render () {
    return (
      <div className="Editor"
        style={[styles.Editor, this.props.style ]}>
        </div>
    )
  }
}

export default Radium(Editor);
