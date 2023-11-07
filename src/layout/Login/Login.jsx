import { Link } from "react-router-dom";
import login from '../../assets/undraw_login_re_4vu2.svg'

const Login = () => {

    const handleLogin = e =>{
       e.preventDefault();
       console.log('clicked login btn');
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
        <img src={login} alt="" />
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
        <p>You hava no account please <Link className="text-blue-500 text-xl font-bold" to={'/register'}>Register</Link> </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;