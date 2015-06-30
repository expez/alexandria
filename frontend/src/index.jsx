import React from 'react';
import Router from 'react-router';
import App from './components/Application';
import routes from './routes';

import "bootstrap-webpack";
//require('bootstrap-webpack!./bootstrap.config.js');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
});
