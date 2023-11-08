import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../layout/Home/Home";
import Login from "../../layout/Login/Login";
import Services from "../../layout/Services/Services";
import Register from "../../layout/Register/Register";
import ServicesDetails from "../../component/ServicesDetails/ServicesDetails";
import Book from "../../component/Book/Book";
import Bookings from "../../component/Bookings/Bookings";

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
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/services/:id',
          element:<ServicesDetails></ServicesDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/book/:id',
          element:<Book></Book>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<Bookings></Bookings>
        }

      ]
    },
  ]);

  export default router;