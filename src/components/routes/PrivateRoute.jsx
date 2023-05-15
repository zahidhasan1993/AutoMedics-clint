import React from 'react';
import { useContext } from 'react';
import { DataProvider } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(DataProvider);

    if (loader) {
        return <button className="btn loading md:my-[20rem] md:mx-[35rem]">loading</button>
    }
    if (user) {
        return children;
        
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;