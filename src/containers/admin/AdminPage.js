import React from 'react';
import { Link, Route } from "react-router-dom";

import AdminUsersPage from "containers/admin/Users/AdminUsersPage";
import AdminOrdersPage from "containers/admin/Orders/AdminOrdersPage";
import AdminProductsPage from "containers/admin/Products/AdminProductsPage";
import AdminCollectionsPage from "containers/admin/Collections/AdminCollectionsPage";
import AdminContentsPage from "containers/admin/Contents/AdminContentsPage";
import AdminDashboardPage from "containers/admin/Dashboard/AdminDashboardPage";

const AdminPage = ({ match }) => {
  return (
    <div className="admin-container">
      <Link to={`${match.url}/users`}>users - </Link>
      <Link to={`${match.url}/products`}>products - </Link>
      <Link to={`${match.url}/orders`}>orders - </Link>
      <Link to={`${match.url}/dashboard`}>dashboard - </Link>
      <Link to={`${match.url}/contents`}>contents - </Link>
      <Link to={`${match.url}/collections`}>collections - </Link>

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

