import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../layout/Home/Home";
import Login from "../../layout/Login/Login";
import Services from "../../layout/Services/Services";
import Register from "../../layout/Register/Register";
import ServicesDetails from "../../component/ServicesDetails/ServicesDetails";
import Book from "../../component/Book/Book";
import Bookings from "../../component/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../component/ErrorPage/ErrorPage";
import AddService from "../../layout/Home/Services/AddService/AddService";
import MyService from "../../layout/Home/Services/MyService/MyService";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
          element:<PrivateRoute><Services></Services></PrivateRoute>
        },
        {
          path:'/services/:id',
          element:<ServicesDetails></ServicesDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/book/:id',
          element:<PrivateRoute><Book></Book></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
        },
        {
          path:'/addService',
          element:<AddService></AddService>
        },
        {
          path:'/myService',
          element:<PrivateRoute><MyService></MyService></PrivateRoute>
        },

      ]
    },
  ]);

  export default router;