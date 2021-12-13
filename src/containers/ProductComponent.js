import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, category } = product;
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div className="card shadow-sm m-3" style={{ width: "20rem" }}>
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="container px-4">
      <div className="row  gx-5">
        <div className="col column">
          <div className="d-flex align-content-center flex-wrap">
            {renderList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
