var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var Page1 = require('./components/page1.jsx');

var Routes = (
  <Router>
   <Route path="/" component={Base}>
     <Route path="/page1" component={page1}/>
     <Route path="/page2" component={page2}/>
   </Route>
  </Router>
);

module.exports = Routes;
