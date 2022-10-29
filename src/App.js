import CategoryDetails from "pages/categoryDetails";
import Detail from "pages/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product" element={<Detail />}></Route>
        <Route path="/category" element={<CategoryDetails />}></Route>
      </Routes>

      {/* <Home  /> */}
    </div>
  );
};

export default App;
