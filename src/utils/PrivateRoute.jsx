/** @format */

import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

const PrivateRoute = () => {
  const { token, handleGetUser } = useAuth();

  useEffect(() => {
    if (!token) {
      toast.error(`You have to Log In First`, {
        id: "unique",
      });
    } else {
      handleGetUser();
    }
  }, []);

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
