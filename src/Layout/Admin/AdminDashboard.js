import Layout from "../../Components/Layout";
import AdminMenu from "../../Components/Layout/SIdebar/adminSidenav";
import { useAuth } from "../../Context/authContext";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <AdminMenu />
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>Admin Name: {auth?.user?.name}</h3>
                <h3>Admin Email: {auth?.user?.email}</h3>
                <h3>Admin Phone No.: {auth?.user?.phone}</h3>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default AdminDashboard;
