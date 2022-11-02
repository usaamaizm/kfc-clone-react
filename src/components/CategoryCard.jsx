import React from "react";
import {Link} from "react-router-dom"
function CategoryCard({ categories }) {
    function convertToSlug(text) {
      return text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    }
  
  return (
    <div className="row mb-4">
      {
      categories.map( category => {
        let slug = convertToSlug(category.title)
        return (
          <div key={category.id} className="col-md-2">
            <Link to= {`/category/${slug}`}>
              <img src={category.image} className="img-thumbnail" alt="..." />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default CategoryCard;
