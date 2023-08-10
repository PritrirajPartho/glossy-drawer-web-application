import {
    createBrowserRouter,
  } from "react-router-dom";
import Instructor from "../pages/Home/Instructor/Instructor";



  const router = createBrowserRouter([
    {
    //   path: "/",
    //   element: <Root />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Instructor></Instructor>,
        },
      ],
    },
  ]);

  export default router;