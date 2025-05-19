import React, { useState } from "react";
import GreenContext from "./GreenContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  const sharedData = {
    firebaseUser,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    googleLogin,
  };
  return <GreenContext value={sharedData}>{children}</GreenContext>;
};

export default GreenProvider;
