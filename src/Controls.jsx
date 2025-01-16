import Filter from "./Filter"
import Search from "./Search"


function Controls() {
  return (
    <div className="flex items-center gap-4 mb-4">
        <Search />
        <Filter />
    </div>
  )
}

export default Controls