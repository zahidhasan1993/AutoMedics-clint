import React, { useContext } from "react";
import { DataProvider } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'

const SocialLogin = () => {
    const {googleLogin} = useContext(DataProvider);
    const handleGoogleSIgnIn = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Logged In Successful',
                showConfirmButton: false,
                timer: 1500
              })

        })
        .catch(error => {
            console.log(error.message);
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
    <div>
      <div className="divider">OR</div>
      <button onClick={handleGoogleSIgnIn} className="btn btn-circle btn-outline text-orange-700 hover:bg-orange-700 md:ml-[10.5rem] md:mb-5">
        G
      </button>
    </div>
  );
};

export default SocialLogin;
