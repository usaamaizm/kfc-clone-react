import React from "react";
import { data } from "../data/data";

const Card = ({ product }) => {
  return (
    <div>
      <div className="card mb-4">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <div className="card-btn d-flex justify-content-between">
            <a href="#" className="btn">
              <strong>Rs. {product.price}</strong>
            </a>
            <a href="#" className="btn btn-danger">
              Add to bucket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
