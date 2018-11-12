import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
var thunkMiddleware = require('redux-thunk').default
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from "redux-logger";
import rootReducer from './rootReducer'


const newHistory = createBrowserHistory();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, createLogger()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.getElementById('app')
);
