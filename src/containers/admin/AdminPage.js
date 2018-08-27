import React from 'react';
import { Route } from "react-router-dom";
import AdminUsersPage from "containers/admin/Users/AdminUsersPage";
import AdminOrdersPage from "containers/admin/Orders/AdminOrdersPage";
import AdminProductsPage from "containers/admin/Products/AdminProductsPage";
import AdminCollectionsPage from "containers/admin/Collections/AdminCollectionsPage";
import AdminContentsPage from "containers/admin/Contents/AdminContentsPage";
import AdminDashboardPage from "containers/admin/Dashboard/AdminDashboardPage";
import MenuItem from "components/header/MenuItem";

const AdminPage = ({ match }) => {
  return (
      <div className="admin-page-container">
        <div className="subheader-container">
          <div className="menu-container">
            <MenuItem url={match.url} name="dashboard" />
            <MenuItem url={match.url} name="orders" />
            <MenuItem url={match.url} name="contents" />
            <MenuItem url={match.url} name="collections" />
            <MenuItem url={match.url} name="products" />
            <MenuItem url={match.url} name="users" />
            <hr />
          </div>
        </div>

      <Route path={`${match.url}/users`} component={AdminUsersPage}/>
      <Route path={`${match.url}/orders`} component={AdminOrdersPage}/>
      <Route path={`${match.url}/products`} component={AdminProductsPage}/>
      <Route path={`${match.url}/dashboard`} component={AdminDashboardPage}/>
      <Route path={`${match.url}/contents`} component={AdminContentsPage}/>
      <Route path={`${match.url}/collections`} component={AdminCollectionsPage}/> 
    </div>
  )
};

export default AdminPage;

