import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
var thunkMiddleware = require('redux-thunk').default
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";


const newHistory = createBrowserHistory();
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunkMiddleware, createLogger())
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('app')
);
