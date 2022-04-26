import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Products from "../../components/ProductList/Products";
import "../../styles/_banner.css";
import ImageSection from "../../components/Sections/ImageSection";
import FullWidthSection from "../../components/Sections/FullWidthSection";

const Home = () => {
  return (
    <>
      <div className="container_section">
        <div className="banner">
          <Banner />

          <Categories />
          <Products />
          <ImageSection />
          <ImageSection />
          <ImageSection />
        </div>
      </div>
      <FullWidthSection />
    </>
  );
};

export default Home;
