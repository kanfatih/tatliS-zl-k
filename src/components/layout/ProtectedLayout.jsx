import React from "react";
import { Navigate, useOutlet } from "react-router";

export const ProtectedLayout = () => {
  const token = localStorage.getItem("token");
  const outlet = useOutlet();

  if (!token) {
    return <Navigate to="/giris" />;
  }

  return <div>{outlet}</div>;
};
