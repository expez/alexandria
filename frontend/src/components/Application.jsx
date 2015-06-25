// Object.assign
import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';
import {RouteHandler} from 'react-router';
import Radium from 'radium';

import Navbar from './Navbar';
import Footer from './Footer';
import Editor from './Editor'

var styles = {
  Site: {
    display: "flex",
    flex: "0 1 auto"
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="Site">

        <Navbar />

        <main className="Site-content Site-content--full"
          style={[styles.Site, this.props.style]}>
          <Editor />
          <RouteHandler {...this.props} />
        </main>

        <Footer/>

      </div>
    );
  }
}

export default Radium(App);
