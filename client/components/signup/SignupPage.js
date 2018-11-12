import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction';
import { addFlashMessage} from '../../actions/flashMessages.js'

class SignupPage extends React.Component {
  render (){
    const { userSignupRequest, addFlashMessage } = this.props;
    console.log(addFlashMessage, '888');
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm
            userSignupRequest={this.props.userSignupRequest}
            addFlashMessage= {addFlashMessage}/>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage }) (SignupPage);
