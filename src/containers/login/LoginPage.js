import React, { Component } from "react";
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from 'components/forms/login/LoginForm';
import { Link } from 'react-router-dom';
import { login } from "actions/auth.actions";

class LoginPage extends Component {
  
  handleSubmit = values => {
    this.props.dispatch(login(values.username, values.password));
  }

  render() {
    return (
      <div className="backdropClass">
        <Modal.Body>
          <div className="login-modal">
            <Link to="/">
              <div className="close-image" role="presentation" />
            </Link>
            <div className="modal-title">Login</div>
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
  user: state.authReducer ? state.authReducer.user : null,
  loginError: state.authReducer ? state.authReducer.loginError : null,
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

