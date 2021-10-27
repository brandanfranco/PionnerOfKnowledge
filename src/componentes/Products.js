import React, { Component, useState } from "react";
import { AddCategory } from "./addCaterogy";
import { ProductGrid } from "./ProductGrid";

export const Products = () => {
  const [categories, setCategories] = useState(["Search  by Name of Product "]);

  return (
    <>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>

      {categories.map((category) => (
        <ProductGrid key={category} category={category}></ProductGrid>
      ))}
    </>
  );
};

export default Products;
