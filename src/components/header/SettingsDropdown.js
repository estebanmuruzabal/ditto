import React from "react";
import PropTypes from 'prop-types';
import history from 'utils/history';

const SettingsDropdown = ({ userInfo, dropdownIsOpen, handleDropdownClick, handleLogoutClick, handleLoginClick }) => {
  if (userInfo) {
    return (
      <div className="settings-dropdown-container">
        <div className="user-menu">
          <span className="user-menu-trigger" role="presentation" onKeyPress={handleDropdownClick} onClick={handleDropdownClick}>Hi, {userInfo.name}</span>
          { dropdownIsOpen &&
            <div
              onKeyPress={handleDropdownClick}
              className="user-menu-content"
              role="presentation"
              onClick={this.handleDropdownClick}
              ref={this.setDropdownRef}
            >
              <div onKeyPress={() => history.push('/admin')} className="user-menu-content-option active" role="presentation" onClick={() => history.push('/admin')}>
                settings
              </div>
              <div onKeyPress={(e) => handleLogoutClick(e)} className="user-menu-content-option active" role="presentation" onClick={(e) => handleLogoutClick(e)}>
                logout
              </div>
            </div>
          }
        </div>  
      </div>
    );
  } else {
    return (
      <div className="">
        <button type="button" className="primary-btn header-login-btn" onClick={handleLoginClick}>LOGIN</button>
      </div>
    );
  }
};

SettingsDropdown.propTypes = {
  userInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  handleDropdownClick: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleLogoutClick: PropTypes.func.isRequired,
};

export default SettingsDropdown;
