import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { hot } from 'react-hot-loader'
import { Router, browserHistory } from 'react-router';
import routes from './routes'

render(<Router history={browserHistory} routes={routes}/>, document.getElementById('app'));

// ReactDOM.render(<App />, document.getElementById('app'));

// const render = Component => {
//   ReactDOM.render(
//     <App/>,
//     document.getElementById('app'),
//   )
// }
//
// render(App)
