// Object.assign
import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';
import {RouteHandler} from 'react-router';
import Radium from 'radium';

import Navbar from './Navbar';
import Footer from './Footer';
import Editor from './Editor'
import LibraryStore from '../stores/LibraryStore';

var styles = {
  Site: {
    display: "flex",
    flex: "0 1 auto"
  }
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = LibraryStore.getState();
  }

  componentDidMount() {
    LibraryStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    LibraryStore.unlisten(this.storeChanged);
  }

   storeChanged(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="Site">

        <Navbar libraries={this.state.libraries}/>

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
