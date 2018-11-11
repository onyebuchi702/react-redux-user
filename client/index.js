import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

ReactDOM.render(
  <Routes />, document.getElementById('app')
);
