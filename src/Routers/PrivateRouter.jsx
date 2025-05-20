import React, { use } from "react";
import Loader from "../Components/Loader/Loader";
import { Navigate, useLocation } from "react-router";
import GreenContext from "../Context/GreenContext";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = use(GreenContext);
  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRouter;
