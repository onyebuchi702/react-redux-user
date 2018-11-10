import React from 'react';
import NavigationBar from './NavigationBar';
// import WelcomePage from '.components/WelcomePage';

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <NavigatorBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
