import React from "react";
import PropTypes from 'prop-types';

const SettingsDropdown = ({ userInfo, dropdownIsOpen }) => {
    if (userInfo) {
        return (
            <div className="right-container">
            <div className="user-menu logout-container-right">
                <span className="user-menu-trigger" role="presentation" onKeyPress={this.handleDropdownClick} onClick={this.handleDropdownClick}>Hi, {this.props.userInfo.name}</span>
                    { dropdownIsOpen &&
                    <div
                    onKeyPress={this.handleDropdownClick}
                    className="user-menu-content"
                    role="presentation"
                    onClick={this.handleDropdownClick}
                    ref={this.setDropdownRef}
                    >
            <div className="user-menu-content-option" onKeyPress={() => this.handleTransitionClick('settings')} role="presentation" onClick={() => this.handleTransitionClick('settings')}>
                settings
            </div>
            <div onKeyPress={() => this.handleTransitionClick('logout')} className="user-menu-content-option active" role="presentation" onClick={() => this.handleTransitionClick('logout')}>
                logout
            </div>
        </div>
        }
    </div>
            </div>
        );
    } else {
        return (
            <div className="right-container">
            </div>
        );
    }
};

SettingsDropdown.propTypes = {
    clearClassesAction: PropTypes.func.isRequired,
};

SettingsDropdown.defaultProps = {
    isOrgUser: false,
};

export default SettingsDropdown;
