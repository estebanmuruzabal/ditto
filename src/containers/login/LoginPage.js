import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { login } from "actions/auth.actions";
import LoadingSpinner from 'components/loading/LoadingSpinner';
import { required, email } from 'utils/validators';
import Input from 'components/input/Input';
import "./LoginPage.css";

const LOGIN_FORM = 'LoginForm';

const LoginForm = reduxForm({
  form: LOGIN_FORM,
})((props) => {
  return (
    <form>
      <div className="form-container">
        <Field
          name="username"
          type="email"
          component={Input}
          placeholder="Enter Email"
          validate={[required, email]}
        />

        <Field
          type="password"
          name="password"
          component={Input}
          placeholder="Enter Password"
          validate={[required]}
        />

        <Button
          type="submit"
          className="login-button"
          bsStyle="primary"
          disabled={props.loggingIn}
          onClick={(e) => (
            props.handleSubmit(e)
          )}
        >
          LOGIN { props.loggingIn && <LoadingSpinner /> }
        </Button>
      </div>
    </form>
  );
});

class LoginComponent extends Component {
  
  handleSubmit = values => {
    this.props.dispatch(login(values.username, values.password));
  }

  render() {
    return (
      <div className="backdropClass">
        <Modal.Body>
          <div className="login-modal">
            <div className="modal-title">Corporate Login</div>
            <LoginForm
              onSubmit={this.handleSubmit}
            />

            <div className="divider" />

            <div className="links">
              <div
                className="link"
                role="presentation"
              >forgot your password?
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth ? state.auth.user : null,
  loginError: state.auth ? state.auth.loginError : null,
});

LoginComponent.propTypes = {
  user: PropTypes.string,
  loginError: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

LoginComponent.contextTypes = {
  store: PropTypes.object.isRequired
};

export default reduxForm({
  form: 'loginForm',
})(connect(mapStateToProps)(LoginComponent));
