import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { DataProvider } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(DataProvider);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then((result) => {
        localStorage.removeItem("user-access-token");
      })
      .catch((err) => {
        console.log(err.message);
      });
    // console.log('paise');
  };

  return (
    <div className="navbar bg-base-100 mb-12 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link>Contact</Link>
            </li>
            <li>
              {user ? (
                <>
                  <Link to="/orders">Orders</Link>
                  <Link onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="">
          <img src={logo} alt="" className="w-44" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link>Contact</Link>
          </li>
          <li>
            {user ? (
              <>
                <Link to="/orders">Orders</Link>
                <Link onClick={handleLogout}>Logout</Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link>
          <FaShoppingBag className="mr-5"></FaShoppingBag>
        </Link>
        <Link>
          <FaSearch className="mr-5"></FaSearch>
        </Link>

        <Link className="btn btn-outline text-orange-700 hover:bg-orange-600 hover:text-white hover:border-none">
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
