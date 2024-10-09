import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import { getAllBooks, deleteBook } from "../../services";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getAllBooks();
      setBooks(response.data.data);
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter((book) => book._id !== id));
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Books List</h1>
        <Link
          to="/add-new"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Book
        </Link>
        <table className="min-w-full mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td className="border px-4 py-2">{book.title}</td>
                <td className="border px-4 py-2">{book.author}</td>
                <td className="border px-4 py-2">
                  <Link
                    to={`/edit-book/${book._id}`}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-500 text-white px-2 py-1 ml-2 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BookList;
