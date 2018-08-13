import React from 'react';
import { connect } from 'react-redux';
import history from 'helpers/history';
import PropTypes from 'prop-types';
import { getItemInLocalStorage } from 'helpers/local-storage';

export default function requiresAuth(Component, options) {
  class AuthenticatedComponent extends React.Component {
    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { roles } = options;
      const loggedIn = getItemInLocalStorage('account');
      // If not logged and going anywhere else than login, go to login
      if (!loggedIn) {
        if (!history.location.pathname.includes('/login') && !history.location.pathname.includes('/organizer-signup')) {
          history.push('/login');
        }
        // if going to login and already logged in, go to not found
      }
      if (loggedIn) {
        if (history.location.pathname.includes('/login')) {
          if (this.props.isCptUser) {
            history.push('/cpt-dashboard');
          } else if (this.props.isOrgUser) {
            history.push('/org-dashboard');
          } else {
            history.push('/not-found');
          }
        } else if (roles) {
          if (roles.indexOf(this.props.roleName) === -1) {
            history.push('/not-found');
          }
        }
      }
    }

    render() {
      return (
        <div className="authenticated">
          <Component {...this.props} />
        </div>
      );
    }
  }

  AuthenticatedComponent.propTypes = {
    isCptUser: PropTypes.bool,
    isOrgUser: PropTypes.bool,
    roleName: PropTypes.string,
  };

  AuthenticatedComponent.defaultProps = {
    isCptUser: false,
    roleName: '',
    isOrgUser: false,
  };

  const mapStateToProps = state => ({
    isCptUser: state.userReducer.isCptUser,
    roleName: state.userReducer.roleName,
    isOrgUser: state.userReducer.isOrgUser,
  });

  return connect(mapStateToProps)(AuthenticatedComponent);
}
