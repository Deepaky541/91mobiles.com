import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const IsAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);
  if (!isAuth) {
    return <Navigate to="/login" />
  }
  return children;
}
