import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {
  render (){
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">4Sure</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/signup" className="navbar-brand">Sign up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavigationBar;
