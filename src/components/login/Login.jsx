import React from "react";
import Lottie from "react-lottie";
import loginLottie from "../../assets/lottie/142230-login.json";
import { Link } from "react-router-dom";

const Login = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loginLottie,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <Lottie 
            options={defaultOptions}
          ></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center text-orange-700 font-bold">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
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
              <button className="btn bg-orange-900 border-none hover:bg-orange-500 hover:text-black">Login</button>
            </div>
            <h1>New in this website!!! <Link to='/register' className="text-orange-700">Register Here....</Link></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
