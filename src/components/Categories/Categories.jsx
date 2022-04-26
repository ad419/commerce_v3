import React from "react";
import CategoryCard from "./CategoryCard";
import "../../styles/_categories.css";

const Categories = () => {
  return (
    <>
      <div className="categories_heading">
        <h1>Shop By categories</h1>
      </div>
      <div className="grid">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </>
  );
};

export default Categories;
