import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    if(loading){
        <span className="loading loading-dots loading-md text-center"></span>
    }
    if(user?.email){
       return children;
    }
    return <Navigate to='/login' replace ></Navigate>
};

export default PrivateRoute;