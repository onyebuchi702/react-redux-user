import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { hot } from 'react-hot-loader';

import App from './components/App';
import WelcomePage from './components/WelcomePage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NavigationBar from './components/NavigationBar';

const Routes = () => (
  <Router>
    <div>
      <NavigationBar />

      <Route exact path="/" component={WelcomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
    </div>
  </Router>
)

export default Routes
