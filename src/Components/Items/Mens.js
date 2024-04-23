import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import "./Mens.css";
import { Link } from "react-router-dom";

const Mens = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const addProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Err", error);
      });
    const mensClothing = response.data.filter(
      (item) => item.category === "men's clothing"
    );
    dispatch(setProducts(mensClothing));
  };

  useEffect(() => {
    addProduct();
  }, []);

  return (
    <div className="men">
      <h1>POPULAR IN MEN</h1>
      <hr />
      <div className="men-items">
        {products.map((product) => (
          <div key={product.id} className="men-item">
            <Link to={`/product/${product.id}`}>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p>$ {product.price}</p>
              <p>{product.category}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
