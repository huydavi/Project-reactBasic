import User from "./component/User/User";
import Admin from "./component/Admin/Admin";
import Homepage from "./component/Home/Homepage";
import Dashboard from "./component/Admin/Content/DashBoard";
import ManageUser from "./component/Admin/Content/ManageUser";
import Login from "./component/Auth/Login";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import { ToastContainer } from "react-toastify";
import Register from "./component/Auth/Register";
import ListQuiz from "./component/User/ListQuiz";
import DetailQuiz from "./component/User/DetailQuiz";
import ManageQuiz from "./component/Admin/Content/Quiz/ManageQuiz";
import Questions from "./component/Admin/Content/Question/Questions";
import PrivateRoute from "./routes/PrivateRoute";
import { Suspense } from "react";

const Layout = () => {
  const NotFound = () => {
    return (
      <div className="mt-3 container alert alert-danger">
        404.Not found with data with your current URL
      </div>
    );
  };
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homepage />} />
            <Route
              path="/users"
              element={
                <PrivateRoute>
                  <ListQuiz />
                </PrivateRoute>
              }
            />
          </Route>
          <Route path="/quiz/:id" element={<DetailQuiz />} />
          <Route
            path="/admins"
            element={
              <PrivateRoute>
                <Admin />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="manage-users" element={<ManageUser />} />
            <Route path="manage-quizzes" element={<ManageQuiz />} />
            <Route path="manage-questions" element={<Questions />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
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
      </Suspense>
    </>
  );
};

export default Layout;
