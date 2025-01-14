import BookRow from "./BookRow"

const BOOKS = [
    {
        id: 1,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        featured: false
    },
    {
        id: 2,
        title: "Great Expectations",
        author: "Charles Dickens",
        featured: false
    },
    {
        id: 3,
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
        featured: false
    },
    {
        id: 4,
        title: "To the Lighthouse",
        author: "Virginia Woolf",
        featured: false
    },
    {
        id: 5,
        title: "War and Peace",
        author: "Leo Tolstoy",
        featured: false
    },
    {
        id: 6,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        featured: false
    },
]

function BookList() {
  return (
    <ul className="space-y-4">
        {
            BOOKS.map((book) => (
                <li key={book.id} className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
                    <BookRow book={book} />
                </li>
            ))
        }
    </ul>
  )
}

export default BookList