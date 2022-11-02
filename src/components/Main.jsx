import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/data";
import Card from "./Card";

const baseUrl = "http://localhost:3000";

function Main({ products }) {
  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <main>
      <div className="row">
        {products.map((product) => {
          let slug = convertToSlug(product.title);

          return (
            <div key={product.id} className="col-md-3">
              <Link to={`/product/${slug}`}>
                <Card product={product} />
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
