import React, { Component, useState } from "react";
import { AddCategory } from "./addCaterogy";
import { ProductGridTitle } from "./ProductGridTitle";

export const ProductsItem = () => {
  const [categories, setCategories] = useState(["Search by Title of Product "]);

  return (
    <>
      <AddCategory setCategories={setCategories}></AddCategory>
      <hr></hr>
      {categories.map((category) => (
        <ProductGridTitle key={category} category={category}></ProductGridTitle>
      ))}
    </>
  );
};

export default ProductsItem;
