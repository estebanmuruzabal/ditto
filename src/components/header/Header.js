import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import SettingsDropdown from "components/header/SettingsDropdown";
import Logo from "components/header/Logo";
import history from 'utils/history';
import { logout } from 'actions/auth.actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = null;

    this.setDropdownRef = element => {
      this.dropdownRef = element;
    };
    this.state = { dropdownIsOpen: false };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleDropdownClick = e => {
    e.stopPropagation();
    this.setState(prevState => ({
      dropdownIsOpen: !prevState.dropdownIsOpen,
    }));
  }

  handleWindowClick = e => {
    e.stopPropagation();
    if (!this.state.dropdownIsOpen) return;
    if (this.dropdownRef.contains(e.target)) return;

    this.setState({ dropdownIsOpen: false });
  }

  render() {
    return (
      <div className="header">
        <div className="left-container">
          <Logo />
        </div>
        <div className="right-container">
          <SettingsDropdown
            userInfo={this.props.userInfo}
            setDropdownRef={this.setDropdownRef}
            dropdownIsOpen={this.state.dropdownIsOpen}
            handleDropdownClick={this.handleDropdownClick}
            handleLogoutClick={() => this.props.dispatch(logout())}
            handleLoginClick={() => history.push('/login')}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.authReducer ? state.authReducer.user : null,
});

Header.propTypes = {
  userInfo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Header);
