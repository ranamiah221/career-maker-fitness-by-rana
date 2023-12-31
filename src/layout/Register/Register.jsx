import { Link, useNavigate } from "react-router-dom";
import signUp from '../../assets/undraw_sign_up_n6im.svg'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";

const Register = () => {
const { createUser }= useContext(AuthContext);
  const navigate= useNavigate();
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name= form.name.value;
        const password=form.password.value;
        const email = form.email.value;
        const url = form.url.value;
        console.log(name, email, password, url );
        createUser(email, password)
        .then(result=>{
          const user = result.user;
          swal("well come", "Login successful", "success");
          console.log(user);
          navigate('/login')
        })
        .catch(error=>{
          console.log(error.message);
          swal("oops", 'already registered', "error");
        })

     }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
        <img src={signUp} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold underline text-center mt-6">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name="url" placeholder="photo url" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered"  />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <p>You hava already account please <Link className="text-blue-500 text-xl font-bold" to={'/login'}>Login</Link> </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;