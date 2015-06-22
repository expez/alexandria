var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var routes = (
  <Route name="app" path="/" handler={require("./components/Application")}>
    <Route name="index" transitionName="yolo" handler={require("./components/pages/Index")} addHandlerKey={true}/>
    <Route name="about" handler={require("./components/pages/About")} addHandlerKey={true}/>
    </Route>
);

module.exports = routes;
