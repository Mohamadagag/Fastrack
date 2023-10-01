import React, { useState } from "react";
import "../styles/LuxuryCars.css";
import luxuryCars from "../data/luxuryCars";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const LuxuryCars = () => {
  const [cars, setCars] = useState(luxuryCars);
  return (
    <div className="container luxury-cars-container">
      <h1>Luxury Cars</h1>
      <div className="luxury-cars-desc">
        <p>
          France is the proper definition of a luxury country! What better way
          to explore this magnificent city than with a luxurious ride that
          guarantees self-confidence and maximum driving pleasure?
        </p>
        <p>
          Shift up a gear and make your trip in France extra special by renting
          our high-end Fast Track luxury cars. Enjoy features a notch above your
          average rental car, like a strong engine, comfortable interior, and
          sleek, eye-catching body style. Choose from an exciting selection of
          luxury rentals ranging from European to American classics, SUVs,
          sports cars, and much more. With Fast Track, you’ll be able to weekly
          or monthly rent the latest exotic models from top manufacturers such
          as Ferrari, Lamborghini, Porsche, and Bentley, just to name a few.
          Hire a high-performance luxury car to make the journey as enjoyable as
          the destination.
        </p>
      </div>

      <div className="luxurycars-product_grid">
        {cars.map((car) => (
          <Link to={`/luxury-cars/${car.id}`} key={car.id}>
            <div className="luxurycars-product_card">
              <div className="luxurycars-image-container">
                <img src={car.urls[0]} alt={car.name} />
              </div>
              <h1>{car.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LuxuryCars;
