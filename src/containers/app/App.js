import React, { Component } from "react";
import PropTypes from "prop-types";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from 'utils/history';

import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import PrivateRoute from "../misc/PrivateRoute";
import ModalComponent from 'components/modals/ModalComponent';
import Home from "../home/Home";
import UsersPage from "../user/UsersPage";
import ReposPage from "../repo/ReposPage";
import AdminPage from "containers/admin/AdminPage";
import LoginPage from "containers/login/LoginPage";
import SignupPage from "containers/signup/SignupPage";
import SettingsPage from "containers/settings/SettingsPage";
import EditNewCollectionPage from 'containers/admin/Collections/EditNewCollectionPage';
import About from "../about/About";
import NotFound from "../misc/NotFound";

class App extends Component {

  render() {
    const { user } = this.props;
    const isAuthenticated = true && user;
    return (
      <Router history={history}>
        <div className="appContent">
          <Header />
          <div className="bodyContent">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignupPage} />
              <PrivateRoute path="/admin" isAuthenticated={isAuthenticated} component={AdminPage} />
              <PrivateRoute path="/users" isAuthenticated={isAuthenticated} component={UsersPage} />
              <PrivateRoute path="/repos" isAuthenticated={isAuthenticated} component={ReposPage} />
              <PrivateRoute path="/edit-collection/:collectionId" isAuthenticated={isAuthenticated} component={EditNewCollectionPage} />
              <PrivateRoute path="/settings" isAuthenticated={isAuthenticated} component={SettingsPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer />
          <ModalComponent />
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
    user: authReducer ? authReducer.user : null,
  };
};

export default connect(mapStateToProps)(App);
