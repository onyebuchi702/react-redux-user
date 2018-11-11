import React from 'react';
import PropTypes from 'prop-types'; 
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignUpRequest } from '../../actions/signupAction';

class SignupPage extends React.Component {
  render (){
    const { userSignUpRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignUpRequest={userSignUpRequest}/>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignUpRequest: React.PropTypes.func.isRequired
}

export default connect((state) => { return {} }, { userSignUpRequest }) (SignupPage);
