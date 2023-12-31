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
import DrawingCanvas from "../pages/Canvas/DrawingCanvas";
import Contacts from '../../src/pages/Contacts/Contacts';
import Payment from '../pages/Dashboard/Dashboard/Payment/Payment';
import ManageUsers from '../pages/Dashboard/ManageUsers/ManageUsers';
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import CourseDetails from "../pages/Home/CourseDetails/CourseDetails";

import BlogPost from "../pages/BlogPost/BlogPost";
import FAQ from "../pages/FAQ/FAQ";
import CreatePost from "../pages/BlogPost/CreatePost";
import Events from "../pages/Events/Events";
import Profile from "../pages/Profile/Profile";
import UserAllPost from "../pages/UserAllPost/UserAllPost";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/courses",
        element: <MyCourses></MyCourses>,
      },
      {
        path: "/detail/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://glossy-drawer-web-application-server-wine.vercel.app/courses/${params.id}`)
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },

      {
        path: "/canvas",
        element: <DrawingCanvas></DrawingCanvas>,
      },
      {
        path: "/contact",
        element: <Contacts></Contacts>,
      },
      {
        path: "/blogpost",
        element: <BlogPost></BlogPost>,
      },
      {
        path: "/createpost",
        element: <CreatePost></CreatePost>,
      },
      {
        path: "/event",
        element: <Events></Events>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/allPost",
        element: <UserAllPost></UserAllPost>,
        },
        {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'adminhome',
        element: <AdminHome></AdminHome>
      },
      {
        path: 'addcourses',
        element: <AddCourses></AddCourses>
      },
      {
        path: 'insaddcourses',
        element: <InsAddedCourses></InsAddedCourses>
      },
      {
        path: "mycourses",
        element: <MyCourses></MyCourses>
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
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