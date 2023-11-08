import { NavLink } from "react-router-dom";
import './Navbar.css';
import logo from'../../assets/fitLogo1.png';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Navbar = () => {
  const { user, logOut }=useContext(AuthContext);
  const handleLogOut=() =>{
    logOut()
    .then(swal("WOW", "LOG OUT SUCCESSFUL", "success"))
    .catch(error=>{
      console.log(error)
    })

  }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/services'}>Services</NavLink>
            
              <li> 
                <a>Dashboard </a>
                <ul className="p-2">
                 <li><NavLink>My-services</NavLink></li>
                 <li><NavLink>Add-services</NavLink></li>
                
                </ul>
              </li>
              <li> 
                <a>My Schedules </a>
                <ul className="p-2">
                 <li><NavLink>My-Booking</NavLink></li>
                 <li><NavLink>My-Pending Work</NavLink></li>
                
                </ul>
              </li>
            </ul>
          </div>
          <img className="w-1/4 h-1/4" src={logo} alt="" />
          <h2 className="normal-case text-2xl font-bold text-gray-600">Fit Camp <span className="text-amber-500">420</span></h2>
        </div>
        <div className="navbar-center hidden lg:flex lg:items-center">
          <ul className="menu menu-horizontal px-1">
          <div className={`selected`}>
          <NavLink className={`btn btn-ghost`} to={'/'}>Home</NavLink>
          {
            user?.email ? <button onClick={handleLogOut} className="btn btn-ghost">Log out</button> : <NavLink className={`btn btn-ghost`} to={'/login'}>Login</NavLink>
          }
          <NavLink className={`btn btn-ghost`} to={'/services'}>Services</NavLink>
          
          </div>
           <div className="dropdown dropdown-right dropdown-end">
           <li tabIndex={0}>
              <details>
                <summary className={`btn btn-ghost mt-2`}>Dashboard </summary>
                <ul className="p-2">
                 <li><NavLink>My-services</NavLink></li>
                 <li><NavLink>Add-services</NavLink></li>
                </ul>
              </details>
            </li>
           </div>
           <div className="dropdown dropdown-right dropdown-end">
           <li tabIndex={0}>
              <details>
                <summary className={`btn btn-ghost mt-2`}>My Schedules</summary>
                <ul className="p-2">
                 <li><NavLink to={'/bookings'}>My-Booking</NavLink></li>
                 <li><NavLink>My-Pending Work</NavLink></li>
                </ul>
              </details>
            </li>
           </div>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.email ?  <div>{user.email}
              <button onClick={handleLogOut} className="btn btn-secondary">Log out</button> 
              </div> : <NavLink className={`btn btn-ghost`} to={'/login'}>Login</NavLink>
          }
        </div>
      </div>
    );
};

export default Navbar;