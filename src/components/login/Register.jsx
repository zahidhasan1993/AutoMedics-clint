import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import registerLottie from "../../assets/lottie/112454-form-registration.json";
import { DataProvider } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const {registerWithEmail} = useContext(DataProvider);
  // console.log(registerWithEmail);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: registerLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

     console.log(email,password,name);

    registerWithEmail(email,password)
    .then(result => {
      console.log(result.user);
      form.reset();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully created new account',
        showConfirmButton: false,
        timer: 1500
      })

    })
    .catch(error => {
      console.log(error.message);
    })

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:w-1/2">
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <h1 className="text-3xl font-bold text-orange-700 text-center">
                Register
              </h1>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-orange-900 border-none hover:bg-orange-500 hover:text-black">
                Register
              </button>
            </div>
            <h1>
              All ready have an account!!!{" "}
              <Link to="/login" className="text-orange-700">
                Login Here....
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
