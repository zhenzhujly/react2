import React,{ PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router';

import Roots from './components/roots';
import Header from './components/header';
import Home from './views/home';
import Foots from './views/foots';



Route.propTypes = {
  path:PropTypes.string.isRequired,
  component:PropTypes.func.isRequired
};
IndexRoute.propTypes = {
  component:PropTypes.func.isRequired
};
Router.propTypes = {
  history:PropTypes.object
};
Redirect.propTypes = {
  from:PropTypes.string.isRequired,
  to:PropTypes.string.isRequired
};

// Render the main component into the dom
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Roots}>
      <IndexRoute component={Header}/>
      <Route path='/home' component={Home}/>
      <Route path='/foots' component={Foots}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
