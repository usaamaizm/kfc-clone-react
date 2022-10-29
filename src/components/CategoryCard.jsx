import React from "react";
import {Link} from "react-router-dom"
function CategoryCard({ categories }) {
  return (
    <div className="row mb-4">
      {
      categories.map( category => {
        return (
          <div key={category.id} className="col-md-2">
            <Link to= "/category">
              <img src={category.image} className="img-thumbnail" alt="..." />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryCard;
