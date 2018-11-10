import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

ReactDOM.render(
  <Router history={newHistory} routes={routes}/>, document.getElementById('app')
);

// ReactDOM.render(<App />, document.getElementById('app'));

// const render = Component => {
//   ReactDOM.render(
//     <App/>,
//     document.getElementById('app'),
//   )
// }
//
// render(App)
