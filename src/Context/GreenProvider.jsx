import React, { useState } from "react";
import GreenContext from "./GreenContext";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
import auth from "../Firebase/firebase.init.js";

const GreenProvider = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loading, setLoading]=useState(true)
  const  [errorMessage,setErrorMessage]=useState('')
  const googleLogin = () => {
    setLoading('true')
    return signInWithPopup(auth, googleProvider);
  };
  const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const sharedData = {
    firebaseUser,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    googleLogin,
    loginUser
  };
  return <GreenContext value={sharedData}>{children}</GreenContext>;
};

export default GreenProvider;
