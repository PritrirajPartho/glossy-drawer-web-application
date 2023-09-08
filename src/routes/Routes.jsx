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
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/canvas",
        element:<DrawingCanvas></DrawingCanvas>,
      },
      {
        path: "/canvas",
        element:<DrawingCanvas></DrawingCanvas>,
      },
      // {
      //   path: "/contact",
      //   element: <Contacts></Contacts>,
      // },
      // {
      //   path:'/dashboard/addcourses',
      //   element: <AddCourses></AddCourses>
      // },
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'addcourses',
        element: <AddCourses></AddCourses>
      },
      {
        path: "mycourses",
        element: <MyCourses></MyCourses>
      },
      {

      }
    ],
  },
]);
// {
//   path: 'userhome',
//   element: <StudentRoute><UserHome></UserHome></StudentRoute>
// },
// {
//   path: 'myclasses', 
//   element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
// },
// {
//   path: 'manageusers', 
//   element: <AdminRoute><MangeUsers></MangeUsers></AdminRoute>
// },
// {
//   path: 'addclass', 
//   element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
// },
// {
//   path: 'myselectedclasses', 
//   element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>
// },
// {
//   path:'payment',
//   element: <Payment></Payment>
// },
// {
//   path:'myenrolledclasses',
//   element: <StudentRoute> <MyEnrolledClasses></MyEnrolledClasses></StudentRoute>
// },
// {
//   path:'paymenthistory',
//   element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
// },
// {
//   path: 'manageclasses', 
//   element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
// },
//   ]
// }
// ]);
// {
//   path: '/addcourses',
//   element: <AddCourses></AddCourses>
// },
// {
//   path: 'mycourses',
//   element:<MyCourses></MyCourses>
// }
//     ],
//   },
// ]);



export default router;
