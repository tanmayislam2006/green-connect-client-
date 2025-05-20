import React, { use } from 'react';
import GreenContext from '../Context/GreenContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Components/Loader/Loader';

const PrivateRouter = ({children}) => {
    const {loading,user}=use(GreenContext);
    const location=useLocation();
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};


export default PrivateRouter;