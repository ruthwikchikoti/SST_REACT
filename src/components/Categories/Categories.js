import React, { useEffect, useState } from "react";
import "./Categories.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCategories(res);
      });
  }, []); 

  return (
    <div className="categories-container">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
}

export default Categories;
