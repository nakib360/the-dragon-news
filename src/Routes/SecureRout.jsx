import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Loading";

const SecureRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
    if(loading){
        return <Loading/>
    }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"} />;
};

export default SecureRout;
