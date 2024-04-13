import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootRoute from "../Components/RootRoute/RootRoute";
import Home from "../Components/Home/home";
import Cart from "../Pages/Cart";
import Login from "../Pages/login";
import routesPath from "./routes";
import Mens from "../Components/Items/Mens";
import Womens from "../Components/Items/Womens";
import Electronics from "../Components/Items/Electronics";

const childRoutes = [
  {
    element: <Home />,
    index: true,
  },
  {
    path: routesPath.mens.path,
    element: <Mens />,
  },
  {
    path: routesPath.womens.path,
    element: <Womens />,
  },
  {
    path: routesPath.electronics.path,
    element: <Electronics />,
  },
  {
    path: routesPath.cart.path,
    element: <Cart />,
  },
  {
    path: routesPath.login.path,
    element: <Login />,
  },
];

const routes = [
  {
    path: "/",
    element: <RootRoute />,
    children: childRoutes,
    errorElement: <h1>Error Boundary</h1>,
  },
];
const router = createBrowserRouter(routes);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
