import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeselectedProducts,
  addCart,
} from "../../redux/actions/productActions";
import "./ProductDetails.css";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);

  const { productId } = useParams();
  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const fetchProductionDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductionDetails();
      return () => {
        dispatch(removeselectedProducts());
      };
    }
  }, [productId]);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const getShortenedDescription = (description) => {
    const maxLength = 100; // Set the maximum length of the shortened description
    if (!showFullDescription && description.length > maxLength) {
      return description.substring(0, maxLength) + "..."; // Shorten the description and add ellipsis
    }
    return description; // Return the full description if showFullDescription is true or the length is less than maxLength
  };
  return (
    <div className="productDetails_main">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="product-details-container">
          <div className="product-image-container">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-details-left">
            <h1 className="product-category">{product.category}</h1>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">
              {" "}
              {getShortenedDescription(product.description)}
            </p>
            {product.description.length > 100 && ( // Show "Show more" button only if the description is longer than 100 characters
              <button className="show-more-btn" onClick={toggleDescription}>
                {showFullDescription ? "Show less" : "Show more"}
              </button>
            )}
            <p className="product-price">${product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addProduct(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
