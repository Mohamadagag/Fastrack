import { Link, useParams } from "react-router-dom";
import cars from "../data/luxuryCars";
import "../styles/CarDetails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarDetails = () => {
  const { id } = useParams();

  const car = cars.filter((car) => car.id === id)[0];

  console.log(car);

  return (
    <div className="details-container">
      <div className="details-slider">
        <Carousel autoPlay interval={5000} infiniteLoop>
          {car?.urls?.map((image, index) => (
            <img key={index} src={image} alt={car?.id} />
          ))}
        </Carousel>
      </div>
      <div className="details-description">
        <h1>{car.name}</h1>
        <p>{car.description}</p>
        <Link to="/terms-and-conditions">Terms & Conditions may apply</Link>
      </div>
    </div>
  );
};
export default CarDetails;
