import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import "./Mens.css";
const Mens = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const addProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log("Err", error);
      });
    const womensClothing = response.data.filter(
      (item) => item.category === "women's clothing"
    );
    womensClothing.forEach((item) => {
      console.log(item.category);
    });
    dispatch(setProducts(womensClothing));
    console.log(womensClothing);
    console.log(response.data);
  };

  useEffect(() => {
    addProduct();
  }, []);

  return (
    <div className="men">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="men-items">
        {products.map((product) => (
          <div key={product.id} className="men-item">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
