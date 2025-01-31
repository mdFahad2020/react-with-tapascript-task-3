import PropTypes from "prop-types";
import Filter from "./Filter";
import Search from "./Search";

function Controls({ searchTerm, onSearchTerm, showPrimium, onShowPrimium }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <Search searchTerm={searchTerm} onSearchTerm={onSearchTerm} />
      <Filter showPrimium={showPrimium} onShowPrimium={onShowPrimium} />
    </div>
  );
}

Controls.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchTerm: PropTypes.func.isRequired,
  showPrimium: PropTypes.bool.isRequired,
  onShowPrimium: PropTypes.func.isRequired,
};

export default Controls;
