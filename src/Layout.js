import User from "./component/User/User";
import Admin from "./component/Admin/Admin";
import Homepage from "./component/Home/Homepage";
import Dashboard from "./component/Admin/Content/DashBoard";
import ManageUser from "./component/Admin/Content/ManageUser";
import Login from "./Auth/Login";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/users" element={<User />} />
        </Route>

        <Route path="/admins" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
