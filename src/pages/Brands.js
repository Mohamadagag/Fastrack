import React, { useState } from "react";
import "../styles/Brands.css";
import allBrands from "../data/allBrands";

const Brands = () => {
  const [brands, setBrands] = useState(allBrands);

  return (
    <div className="container brands-container">
      <h1>All Brands</h1>

      <div className="brands-product_grid">
        {brands.map((brand, id) => (
          <a href={`/collections/${brand.url}`} key={id}>
            <div className="brands-product_card">
              <div className="brands-image-container">
                <img src={brand.img} alt={brand.name} />
              </div>
              <h1>{brand.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Brands;
