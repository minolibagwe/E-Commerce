import React from "react";
import Shop from "../../Pages/Shop";
import { Outlet } from "react-router-dom";
const RootRoute = () => {
  return (
    <div>
      <Shop />
      <Outlet />
    </div>
  );
};

export default RootRoute;
