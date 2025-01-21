import React from "react";
import { UseAppContext } from "../context/AppContextProvider";
import { Navigate } from "react-router-dom";
import { routes } from "../constant/route";

const GuestGuard = ({ children }) => {
  const { state } = UseAppContext();
  return (
    <section className="flex justify-center py-[200px]">
      {state.isAuthenticated ? <Navigate to={routes.products} /> : { children }}
    </section>
  );
};

export default GuestGuard;
