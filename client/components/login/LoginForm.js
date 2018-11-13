import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/login';
import './Login.scss'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: '',
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state)

    if(!isValid) {
      this.setState({errors});
    }

    return isValid;
  }

  onSubmit(event){
    event.preventDefault(event);

    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      const { username, password } = this.state;
      this.props.login(username, password)
//       .then(
//         (res) => this.context.router.history.push('/'),
//         (res) => {},
//         (err) => this.setState({ errors: err.data.errors, isLoading: false})
//       )
    }
  }

  render () {
    const { errors, password, username, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit} className='login'>
        <h1 className='loginTitle'>Login Page</h1>

        {errors.form && <div className="alert alert-danger" role="alert">{errors.form}</div>}

        <TextFieldGroup
          className='loginInput'
          error={errors.username}
          field="username"
          label="Username / Email"
          value={this.state.username}
          onChange={this.onChange}
        />

        <TextFieldGroup
          className='loginInput'
          error={errors.password}
          field="password"
          label="Password"
          value={this.state.password}
          onChange={this.onChange}
          type="password"
        />

        <button
          className='loginButton'
          disabled={isLoading}>
          Login
        </button>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

// function mapStateToProps(state) {
//   return { state }
// }

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
    error: state.auth.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: function(username, password){
      dispatch(requestLogin(username, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);
