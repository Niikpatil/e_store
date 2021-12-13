import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { title, image, price, category, description } = product;

  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div class="container">
      <div class="row ">
        <div className="d-flex justify-content-start">
          {Object.keys(product).length === 0 ? (
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <div className="d-flex align-items-center shadow-sm bg-secondary p-2 text-dark bg-opacity-10 ">
              <img
                src={image}
                className="card-img-top"
                alt={title}
                style={{ width: "20rem" }}
              />
              <div className="flex-shrink-0">
                <h5 className="flex-grow-1 ms-3"> {title}</h5>
                <p className="flex-grow-1 ms-3">{category}</p>
                <div className="text-wrap ms-3 " style={{ width: "18rem" }}>
                  {description}
                </div>
                <h3 className="flex-grow-1 ms-3">$ {price}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
