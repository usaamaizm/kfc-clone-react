import CategoryCard from "../components/CategoryCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { data } from "data/data";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <CategoryCard categories={data.categories} />
      <Main products={data.products} />
      <Footer />
    </div>
  );
}

export default Home;
