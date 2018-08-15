import React from 'react';
import { Link, Route } from "react-router-dom";

import AdminUsersPage from "containers/admin/AdminUsers/AdminUsersPage";
import AdminOrdersPage from "containers/admin/AdminOrders/AdminOrdersPage";
import AdminProductsPage from "containers/admin/AdminProducts/AdminProductsPage";

const AdminPage = ({ match }) => {
  return (
    <div className="container">
      <Link to={`${match.url}/users`}>users - </Link>
      <Link to={`${match.url}/products`}>products - </Link>
      <Link to={`${match.url}/orders`}>orders</Link>

      <Route path={`${match.url}/users`} component={AdminUsersPage}/>
      <Route path={`${match.url}/orders`} component={AdminOrdersPage}/>
      <Route path={`${match.url}/products`} component={AdminProductsPage}/>
    </div>
  )
};

export default AdminPage;

