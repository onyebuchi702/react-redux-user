import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { hot } from 'react-hot-loader';

import App from './components/App';
import WelcomePage from './components/WelcomePage';
import SignupPage from './components/signup/SignupPage'

const routes = () => (
  <Route path="/" component={App}>
    <IndexRoute component={WelcomePage}/>
    <Route path="signup" component={SignupPage}/>
  </Route>
)

export default routes

// export default (
//   <Route path="/" component={App}>
//     <IndexRoute component={WelcomePage}/>
//     <Route path="signup" component={SignupPage}/>
//   </Route>
// )
