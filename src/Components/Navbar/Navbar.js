import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import shopping_cart from "../Assets/shopping_cart.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar_main">
      <div className="navbar_logo">
        <img src={logo} alt="" />
        <p>minu shoppy</p>
      </div>
      <ul className="navbar_menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            Mens
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("electronics");
          }}
        >
          <Link to="/electronics" style={{ textDecoration: "none" }}>
            Electronics
          </Link>
          {menu === "electronics" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="login_cart">
        <NavLink to="/login">
          <button>Login</button>
        </NavLink>
        <Link to="/cart">
          <img src={shopping_cart} alt="" />
        </Link>
        <div className="navbar-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
