import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from '../../assets/undraw_login_re_4vu2.svg';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import axios from "axios";

const Login = () => {
   const {login}= useContext(AuthContext);
   const location=useLocation();
   const navigate = useNavigate();
    const handleLogin = e =>{
       e.preventDefault();
       const form = e.target;
       const email = form.email.value;
       const password = form.password.value;
       console.log(email, password);
       login(email, password)
       .then(result=>{
        const loggedInUser = result.user;
        console.log(loggedInUser)
        const user={email}
       
        swal("well come", "Login successful", "success");
        axios.post('http://localhost:5000/jwt',user)
        .then(res=>{
          console.log(res.data)
        })
         navigate(location?.state? location?.state :'/' )
       })
       .catch(error=>{
        console.log(error.message);
       })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
        <img src={loginImg} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold underline text-center mt-6">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>You hava no account please !! <Link className="text-blue-500 text-xl font-bold" to={'/register'}>Register</Link> </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;