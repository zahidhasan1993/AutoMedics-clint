import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.cofig';


export const DataProvider = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState([])
    const registerWithEmail = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            if (currentUser) {
                
                setUser(currentUser);
            }else{
                //signed out
            }
        });
        return () => unsubscribe();
    },[])
    const userSignIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }
    const data = {
        registerWithEmail,
        userSignIn,
        user
    }
    return (
        <DataProvider.Provider value={data}>
            {children}
        </DataProvider.Provider>
    );
};

export default AuthProvider;