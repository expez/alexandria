// Object.assign
import 'babel/polyfill';

//import './style.less';
import './style.css';

import React from 'react';
import Router from 'react-router';
import {RouteHandler} from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";

import PropertyMap from "./PropertyMap";

export default class App extends React.Component {

    render() {

        return (
            <div className="Site">

                <Navbar />

                <main className="Site-content Site-content--full">
                    <RouteHandler {...this.props} />
                </main>

            </div>
        );
    }
};
