import React from "react";
import { DrawerMenu, Header } from "../components";
import { Outlet } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="h-full ">
      <Header />
      <div className="flex h-[calc(100vh-60px)] ">
        <DrawerMenu />
        <div className="w-full bg-grey">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
