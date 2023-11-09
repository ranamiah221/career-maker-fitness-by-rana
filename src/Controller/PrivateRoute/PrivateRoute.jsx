import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    const location = useLocation();
    if(loading){
        <span className="loading loading-dots loading-md text-center"></span>
    }
    if(user?.email){
       return children;
    }
    return <Navigate state={location.pathname} to='/login' replace ></Navigate>
};

export default PrivateRoute;