import PropTypes from "prop-types";

function CarCard({ car }) {
  return (
    <div className="shadow p-3 border">
      <h2 className="text-xl font-bold mb-2">{car.title}</h2>
      <p>
        <span className="font-semibold">Brand:</span> <span>{car.brand}</span>
      </p>
      <p>
        <span className="font-semibold">Year:</span> <span>{car.year}</span>
      </p>
      <p>
        <span className="font-semibold">Price:</span> <span>{car.price}</span>
      </p>
      <p>
        <span className="font-semibold">Premium:</span>{" "}
        <span>
          {car.isPremium === true ? <span>yes</span> : <span>no</span>}
        </span>
      </p>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CarCard;
