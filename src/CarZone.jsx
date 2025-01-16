import CarList from "./CarList"
import Controls from "./Controls"
import Header from "./Header"



function CarZone() {
  return (
    <div className="mx-auto p-4">
        <Header />
        <Controls />
        <CarList />
    </div>
  )
}

export default CarZone