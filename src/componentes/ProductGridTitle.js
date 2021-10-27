import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductsItem";

export const ProductGridTitle = ({ category }) => {
  const [amount2, setAmount2] = useState([]);
  const [name2, setName2] = useState([]);

  useEffect(() => {
    getProducts();
  }, [category]);

  const getProducts = async () => {
    const searchType2 = "patent title";
    const url = `http://localhost:3001/products?${encodeURI(
      searchType2
    )}_like=${encodeURI(category)}`;

    const res = await fetch(url);
    const data = await res.json();

    const chemicalsTitle = data.map((e) => {
      return {
        id: e["patent no"],
        name: e["chemical type 1"],
        title: e["patent title"],
        link: `https://patents.google.com/patent/${e["patent no"]}`,
      };
    });

    const names = chemicalsTitle.map(function (e) {
      return e.id;
    });
    const sorted = names.sort();

    const unique = sorted.filter(function (value, index) {
      return value !== sorted[index + 1];
    });

    setAmount2(unique.length);
    setName2(chemicalsTitle);
  };

  return (
    <div className="container">
      <h1>{category}</h1>

      <h3>Amount of patents found: {amount2}</h3>

      {name2.map(({ id, name, title, link }) => (
        <table className="table table-striped table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th>Patent</th>
              <th>Name</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td key={id}>{id}</td>
              <td key={id}>{name}</td>
              <td key={id}>{title}</td>
              <td>
                <a className="link-success" href={link}>
                  More...
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};
