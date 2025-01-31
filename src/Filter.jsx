import PropTypes from "prop-types";

function Filter({ showPrimium, onShowPrimium }) {
  console.log(showPrimium);
  return (
    <form className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={showPrimium}
        onChange={(e) => onShowPrimium(e.target.checked)}
      />
      <label className="font-semibold text-sm">Show Primium only</label>
    </form>
  );
}

Filter.propTypes = {
  showPrimium: PropTypes.bool.isRequired,
  onShowPrimium: PropTypes.func.isRequired,
};

export default Filter;
