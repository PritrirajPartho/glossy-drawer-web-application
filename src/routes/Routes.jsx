import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Dashboard from "../layout/Dashboard";
import Login from "../pages/Login/Login";
import SingUp from "../pages/SingUp/SingUp";



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
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
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
    ]
  }
]);

export default router;