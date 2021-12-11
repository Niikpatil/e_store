import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { title, role } = products[0];

  return (
    <div>
      <p>{title}</p>
      <p>{role}</p>
    </div>
  );
};

export default ProductComponent;
