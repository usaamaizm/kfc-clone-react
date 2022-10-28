import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { data } from "./data/data";
import Card from "./components/Card";
import CategoryCard from "./components/CategoryCard";

const App = () => {
  return (
    <>
      <Header />
      <CategoryCard />
      <Main products={data.products} />
      <Footer />
    </>
  );
};

export default App;
