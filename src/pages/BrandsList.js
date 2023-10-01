import { Link, useParams } from "react-router-dom";
import allBrands from "../data/allBrands";
import cars from "../data/luxuryCars";
import "../styles/BrandList.css";

const BrandsList = () => {
  const { brandurl } = useParams();
  const brand = allBrands.filter((brand, index) => brand.url === brandurl)[0];
  const brandCars = cars.filter((car, index) => car.brand === brandurl);

  return (
    <div className="container brand-list-container">
      <h1 className="brand-list-title">{brand.name}</h1>

      <div className="luxurycars-product_grid brandsList-cars-container">
        {brandCars.map((car) => (
          <Link to={`/luxury-cars/${car.id}`} key={car.id}>
            <div className="luxurycars-product_card">
              <div className="luxurycars-image-container">
                <img src={car.urls[0]} alt={car.name} />
              </div>
              <h1 className="car-name">{car.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default BrandsList;
