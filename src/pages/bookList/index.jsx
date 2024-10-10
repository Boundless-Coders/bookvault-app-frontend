import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        
        const response = await axios.get("https://bookvault-app-backend-3.onrender.com");
        setBooks(response.data.works); 
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Book List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div key={book.key} className="border p-4 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-2">{book.title}</h2>
              <p><strong>Author:</strong> {book.authors && book.authors[0]?.name}</p>
              <p><strong>Subject:</strong> {book.subject}</p>
              <Link
                to={`/books/${book.key.split("/")[2]}`}
                className="text-blue-500 mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookList;
