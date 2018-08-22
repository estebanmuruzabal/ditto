import React, { Component } from "react";
import PropTypes from "prop-types";

/////////////////////////////////////////////////////////////////////////
// BrowserRouter would be preferred over HashRouter, but BrowserRouter
// would require configuring the server. So we will use HashRouter here.
// Please change to BrowserRouter if you have your own backend server.
///////////////////////////////////////////////////////////////////////////
import { Router, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import PrivateRoute from "../misc/PrivateRoute";
import Home from "../home/Home";
import UsersPage from "../user/UsersPage";
import ReposPage from "../repo/ReposPage";
import AdminPage from "containers/admin/AdminPage";
import LoginPage from "containers/login/LoginPage";
import SignupPage from "containers/signup/SignupPage";
import About from "../about/About";
import NotFound from "../misc/NotFound";
import history from 'utils/history';

import { logout } from 'actions/auth.actions';

class App extends Component {
  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    const { user } = this.props;
    const isAuthenticated = true && user;
    return (
      <Router history={history}>
        <div className="appContent">
          <Header user={user} handleLogout={() => this.handleLogout()} />
          <div className="bodyContent">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <PrivateRoute path="/admin" isAuthenticated={isAuthenticated} component={AdminPage} />
              <PrivateRoute path="/users" isAuthenticated={isAuthenticated} component={UsersPage} />
              <PrivateRoute path="/repos" isAuthenticated={isAuthenticated} component={ReposPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

App.contextTypes = {
  store: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { authReducer } = state;
  return {
    user: authReducer ? authReducer.user : null
  };
};

export default connect(mapStateToProps)(App);
