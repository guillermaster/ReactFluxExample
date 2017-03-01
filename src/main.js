"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactRouter.run(routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'));
});
