// Object.assign
import 'babel/polyfill';

import React from 'react';
import Router from 'react-router';
import {RouteHandler} from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default class App extends React.Component {

  render() {

    return (
        <div className="Site">

        <Navbar />

        <main className="Site-content Site-content--full">
        <RouteHandler {...this.props} />
        </main>

        <Footer/>

        </div>
    );
  }
}
