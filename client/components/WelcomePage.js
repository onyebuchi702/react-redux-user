import React from 'react';

class WelcomePage extends React.Component {
  render (){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="jumbotron" style={divStyle}>
            <h1>Hii Ryan !!!!!!!</h1>
          </div>
        </div>
      </div>
    );
  }
}

const divStyle = {
  margin: '18px',
  border: '5px solid pink'
};

export default WelcomePage;
