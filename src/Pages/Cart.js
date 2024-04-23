import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/actions/productActions";
import { NavLink } from "react-router-dom";
import "./Cart.css"; // Import your CSS file

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClose = (product) => {
    dispatch(delCart(product));
    console.log()
  };

  const cartItems = (product) => {
    return (
      <div className="cart-item" key={product.id}> {/* Use the CSS class "cart-item" */}
        <div className>
        
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">${product.price}</p>
          <button
            onClick={() => handleClose(product)}
            cancel
            className="btn-close"
            aria-label="Close"
          >remove product</button>
            </div>

          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="empty-cart"> {/* Use the CSS class "empty-cart" */}
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <NavLink
            to="/checkout"
            className="checkout-button btn btn-outline-primary mb-5 w-25 mx-auto" 
          >
            Proceed To checkout
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </>
  );
};

export default Cart;
