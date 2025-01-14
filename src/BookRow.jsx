import BookDetails from "./BookDetails";
import FetureBook from "./FetureBook";
import PropTypes from "prop-types"

function BookRow({ book }) {
  return (
    <>
      <BookDetails title={book.title} author={book.author} />
      <FetureBook />
    </>
  );
}

BookRow.PropTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default BookRow;
