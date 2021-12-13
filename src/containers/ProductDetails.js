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
  const { title, image, category } = product;

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
    <div className="container">
      <div className="row">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="col-6 col-sm-4">
            <div
              className="card m-4 rounded-3 shadow-sm"
              style={{ width: "20rem" }}
            >
              <img src={image} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title"> {title}</h5>
                <p className="card-text">{category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
