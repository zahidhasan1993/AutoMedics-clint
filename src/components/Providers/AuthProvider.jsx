import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase.cofig";

export const DataProvider = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const registerWithEmail = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth,googleProvider);

  }
  const logout = () => {
    setLoader(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      if (currentUser && currentUser.email) {
        const loggedUser = {
          email : currentUser.email,
        }
        fetch('http://localhost:5000/token',{
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(loggedUser)

      })
      .then(res => res.json())
      .then(data => {
        const token = data.token;
        console.log(token);

        localStorage.setItem('user-access-token', token);
        
      })
      }
      else{
        localStorage.removeItem('user-access-token')
      }
    });
    return () => unsubscribe();
  }, []);
  const data = {
    registerWithEmail,
    userSignIn,
    user,
    logout,
    loader,
    googleLogin
  };
  return <DataProvider.Provider value={data}>{children}</DataProvider.Provider>;
};

export default AuthProvider;
