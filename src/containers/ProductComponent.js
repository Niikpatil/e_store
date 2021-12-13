import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, category } = product;
    return (
      <div className="container">
        <div className="row row-cols-1" key={id}>
          <div className="col-6 col-sm-4">
            <Link to={`/product/${id}`}>
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                  <h5 className="card-title"> {title}</h5>
                  <p className="card-text">{category}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
