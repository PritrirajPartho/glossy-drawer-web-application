import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import MyCourses from "../pages/MyCourses/MyCourses";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";
import Instructors from "../pages/Instructors/Instructors";
import AddCourses from "../pages/Dashboard/Dashboard/AddCourses/AddCourses";
import InsAddedCourses from "../pages/Dashboard/Dashboard/InsAddedCourses/InsAddedCourses";
import MyCart from "../pages/Dashboard/Dashboard/MyCart/MyCart";
import DashboardLayout from "../layout/DashboardLayout";
import ManageCourses from "../pages/Dashboard/MangeClasses/ManageCourses";
import DrawingCanvas from '../pages/Canvas/DrawingCanvas';
import MyCoursesCard from "../pages/MyCourses/MyCoursesCard";
import Contacts from "../pages/Contacts/Contacts";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/mycourses",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "/courses",
        element: <MyCoursesCard></MyCoursesCard>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/draw",
        element: <DrawingCanvas></DrawingCanvas>,
      },
      {
        path: "/contact",
        element: <Contacts>                   </Contacts>,
      },
      // {
      //   path:'/dashboard/addcourses',
      //   element: <AddCourses></AddCourses>
      // },
      // {
      //   path: '/dashboard/addcourses',
      //   element: <AddCourses></AddCourses>
      // },
      // {
      //   path: '/dashboard/insaddedcourses',
      //   element: <InsAddedCourses></InsAddedCourses>
      // },
      // {
      //   path:'/dashboard/managecourses',
      //   element: <ManageCourses></ManageCourses>
      // },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // {
      //   path: 'addcourses',
      //   element: <AddCourses></AddCourses>
      // },
      {
        path: "mycourses",
        element: <MyCourses></MyCourses>
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>
      },
      {
        path: "managecourses",
        element: <ManageCourses></ManageCourses>
      },
    ],
  },
]);




export default router;
