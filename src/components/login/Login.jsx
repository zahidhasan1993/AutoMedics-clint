import React, { useContext } from "react";
import Lottie from "react-lottie";
import loginLottie from "../../assets/lottie/142230-login.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { DataProvider } from "../Providers/AuthProvider";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {

  const {userSignIn,user} = useContext(DataProvider);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';



  // console.log(user);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    // console.log(email,password);

    userSignIn(email,password)
    .then(result => {
      // console.log(result.user);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Logged In Successful',
        showConfirmButton: false,
        timer: 1500
      })
      form.reset();
      navigate(from, {replace: true });


    })
    .catch(err => {
      console.log(err.message);
      if (err.message) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: err.message,
          showConfirmButton: false,
          timer: 1500
        })
      }

    })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl text-center text-orange-700 font-bold">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-900 border-none hover:bg-orange-500 hover:text-black">
                Login
              </button>
            </div>
            <h1>
              New in this website!!!{" "}
              <Link to="/register" className="text-orange-700">
                Register Here....
              </Link>
            </h1>
            
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
