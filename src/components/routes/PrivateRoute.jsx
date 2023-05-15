import React from 'react';
import { useContext } from 'react';
import { DataProvider } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(DataProvider);
    const location = useLocation();

    if (loader) {
        return <button className="btn loading md:my-[20rem] md:mx-[35rem]">loading</button>
    }
    if (user) {
        return children;
        
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;