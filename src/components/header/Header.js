import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import SettingsDropdown from "components/header/SettingsDropdown";
import Logo from "components/header/Logo";
import history from 'utils/history';

class Header extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = null;

    this.setDropdownRef = element => {
      this.dropdownRef = element;
    };
    this.state = { dropdownIsOpen: false };
  }

  handleLogoutClick = event => {
    event.preventDefault();
    this.props.handleLogout();
    history.push('/');
  };

  handleDropdownClick = e => {
    e.stopPropagation();
    this.setState(prevState => ({
      dropdownIsOpen: !prevState.dropdownIsOpen,
    }));
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
            dropdownIsOpen={this.state.dropdownIsOpen}
            handleDropdownClick={this.handleDropdownClick}
            handleLogoutClick={this.handleLogoutClick}
            handleLoginClick={() => history.push('/login')}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.auth ? state.auth.user : null,
});

Header.propTypes = {
  userInfo: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Header);
