import PropTypes from "prop-types";
import CarCard from "./CarCard";

function CarList({ cars, searchTerm, showPrimium }) {
  const rows = [];

  cars.forEach((car) => {
    if (
      car.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1 ||
      (showPrimium && !car.isPremium)
    ) {
      return;
    }

    rows.push(<CarCard key={car.id} car={car} />);
  });
  console.log(rows);

  return <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">{rows}</div>;
}

CarList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  cars: PropTypes.array.isRequired,
  showPrimium: PropTypes.bool.isRequired,
};

export default CarList;
