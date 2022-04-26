import React from "react";
import "../../styles/_prods.css";
import ProductCard from "./ProductCard/ProductCard";
import useStyles from "./ProductCard/styles";

const Products = () => {
  const classes = useStyles();

  return (
    <>
      <main className={classes.content}>
        <div className="prod_heading">
          <h1>Search For Different Products</h1>
        </div>
        <div className={classes.toolbar} />

        <div className="grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
    </>
  );
};

export default Products;
