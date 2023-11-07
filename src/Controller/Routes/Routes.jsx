import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../layout/Home/Home";
import Login from "../../layout/Login/Login";
import Services from "../../layout/Services/Services";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/services',
          element:<Services></Services>
        }
      ]
    },
  ]);

  export default router;