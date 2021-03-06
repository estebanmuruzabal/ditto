import React from "react";
import PropTypes from 'prop-types';
import history from 'utils/history';

const SettingsDropdown = ({ userInfo, dropdownIsOpen, handleDropdownClick, handleLogoutClick, handleLoginClick, setDropdownRef }) => {
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
              onClick={handleDropdownClick}
              ref={setDropdownRef}
            >
              { (userInfo.scope).indexOf('admin') !== -1 &&
                <div className="user-menu-content-option active" role="presentation" onClick={() => history.push('/admin')}>
                  admin
                </div>
              }
              <div className="user-menu-content-option active" role="presentation" onClick={() => history.push('/settings')}>
                settings
              </div>
              <div className="user-menu-content-option active" role="presentation" onClick={() => handleLogoutClick()}>
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
  setDropdownRef: PropTypes.func.isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleLogoutClick: PropTypes.func.isRequired,
};

export default SettingsDropdown;
