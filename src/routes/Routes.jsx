import {
    createBrowserRouter,
  } from "react-router-dom";
import Instructor from "../pages/Home/Instructor/Instructor";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);

  export default router;