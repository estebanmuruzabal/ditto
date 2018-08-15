import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import SettingsDropdown from "components/header/SettingsDropdown";
import Logo from "components/header/Logo";

class Header extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.handleLogout();
    this.props.history.replace("/login");
  };

  isActivePage = page => {
    if (this.props.history.location.pathname.indexOf(page) > -1) { return true; } else { return false; }
  };

  render() {
    // const { user } = this.props;

    return (
      <div className="header-container">
        <Logo />
        <SettingsDropdown />
      </div>
    );
  }
}

Header.propTypes = {
  // user: PropTypes.string,
  handleLogout: PropTypes.func.isRequired
};

export default withRouter(Header);


// <Link to="/" className="navbar-brand">
//         <div title="Home" className="brand" />
//         Ditto
//       </Link>
      
//         <button
//           type="button"
//           className="navbar-toggler"
//           data-toggle="collapse"
//           data-target="#navbarCollapse"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
        
//         <div id="navbarCollapse" className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li
//               title="Github Users with over 1000 Followers"
//               className={this.isActivePage('users') ? "nav-item active" : "nav-item"}
//             >
//               <Link className="nav-link" to="/users">Most Followed Users</Link>
//             </li>
//             <li
//               title="Github Repos with over 10000 Stars"
//               className={this.isActivePage('repos') ? "nav-item active" : "nav-item"}
//             >
//               <Link className="nav-link" to="/repos">Most Starred Repos</Link>
//             </li>
//             <li
//               title="Admin"
//               className={this.isActivePage('admin') ? "nav-item active" : "nav-item"}
//             >
//               <Link className="nav-link" to="/admin">Admin</Link>
//             </li>
//             <li
//               title="About"
//               className={this.isActivePage('about') ? "nav-item active" : "nav-item"}
//             >
//               <Link className="nav-link" to="/about">About Us</Link>
//             </li>
//           </ul>

//           <ul className="navbar-nav mt-2 mt-md-0">
//             <Alerts />
//             <UserProfile user={user} handleLogout={this.onLogoutClick} />
//           </ul>
//         </div>