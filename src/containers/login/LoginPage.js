import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from 'components/forms/login/LoginForm';

import { login } from "actions/auth.actions";
import "./LoginPage.css";

class LoginPage extends Component {
  
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

LoginPage.propTypes = {
  user: PropTypes.string,
  loginError: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

LoginPage.contextTypes = {
  store: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(LoginPage);

