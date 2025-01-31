import { useState } from "react";
import CarList from "./CarList";
import Controls from "./Controls";
import Header from "./Header";

const CARS = [
  {
    id: 1,
    title: "Luxury Sedan",
    brand: "Mercedes",
    year: 2023,
    price: 80000,
    isPremium: true,
  },
  {
    id: 2,
    title: "Family SUV",
    brand: "Toyota",
    year: 2022,
    price: 45000,
    isPremium: false,
  },
  {
    id: 3,
    title: "Sports Car",
    brand: "Porsche",
    year: 2023,
    price: 120000,
    isPremium: true,
  },
  {
    id: 4,
    title: "Electric Hatchback",
    brand: "Nissan",
    year: 2022,
    price: 35000,
    isPremium: false,
  },
  {
    id: 5,
    title: "Luxury SUV",
    brand: "BMW",
    year: 2023,
    price: 90000,
    isPremium: true,
  },
];

function CarZone() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showPrimium, setShowPrimium] = useState(false);

  return (
    <div className="mx-auto p-4">
      <Header />
      <Controls
        searchTerm={searchTerm}
        showPrimium={showPrimium}
        onShowPrimium={setShowPrimium}
        onSearchTerm={setSearchTerm}
      />
      <CarList searchTerm={searchTerm} cars={CARS} showPrimium={showPrimium} />
    </div>
  );
}

export default CarZone;
