import CategoryDetails from "pages/categoryDetails";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "pages/ProductDetails";
import Countries from "pages/Countries";

const App = () => {
 

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:slug" element={<ProductDetails />}></Route>
        <Route path="/category" element={<CategoryDetails />}></Route>
        <Route path="/countries" element={<Countries />}></Route>
      </Routes>
    </div>
  );
};

export default App;
