import { useState } from "react";
import luxuryCars from "../data/luxuryCars";
import { Link } from "react-router-dom";

function LuxuryCarsCard() {
  const [cars, setCars] = useState(luxuryCars);

  return (
    <section className="container luxury-container">
      <Link to="/luxury-cars" className="section_title">
        <h1>Luxury Cars</h1>
      </Link>

      <div className="product_grid">
        {cars.slice(0, 8).map((car) => (
          <a href={`/luxury-cars/${car.id}`} key={car.id}>
            <div className="product_card">
              <div className="image-container">
                <img src={car.urls[0]} alt={car.name} />
              </div>
              <h1>{car.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default LuxuryCarsCard;
