import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Container = () => {
  const user = useSelector((state) => state.user);

  return user.isLogged ? (
    <div>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Container;
