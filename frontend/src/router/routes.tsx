import { createBrowserRouter, Navigate } from "react-router-dom";
import LogInForm from "../Login/LoginForm";
import RegistrationForm from "../Registration/Registration";
import Home from "../Home/Home";
import ProfilePage from "../Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"}></Navigate>,
    errorElement: <h1>pag not found</h1>,
  },
  {
    path: "/login",
    element: <LogInForm></LogInForm>,
  },
  {
    path: "/register",
    element: <RegistrationForm></RegistrationForm>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/profile",
    element: <ProfilePage></ProfilePage>,
  },
]);

export default router;
