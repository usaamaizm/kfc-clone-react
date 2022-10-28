import React from "react";
import { data } from "../data/data";
import Card from "./Card";

const baseUrl = "http://localhost:3000";

function Main({ products }) {
  return (
    <main className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-md-3">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
