import PropTypes from "prop-types";

function Search({ searchTerm, onSearchTerm }) {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTerm(e.target.value)}
        placeholder="Search Car"
        className="border rounded-md p-1 w-80"
      />
    </form>
  );
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
};

export default Search;
