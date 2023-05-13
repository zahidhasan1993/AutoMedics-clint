import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.cofig';


export const DataProvider = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const registerWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const data = {
        registerWithEmail,
    }
    return (
        <DataProvider.Provider value={data}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;