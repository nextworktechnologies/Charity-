import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <h4>Admin Dashboard</h4>

        <div className="list-group">
          <NavLink
            to="/dashboard/admin/create-products"
            className="list-group-item list-group-item-action"
          >
            Create Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            All Products
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
