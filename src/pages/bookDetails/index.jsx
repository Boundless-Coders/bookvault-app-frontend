import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import { useState, useEffect } from "react";
import { getBookById } from "../../services";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      const result = await getBookById(id);
      setBook(result.data);
      setLoading(false);
    };
    fetchBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p>
        <strong>Published Year:</strong> {book.publishedYear}
      </p>
      <p>
        <strong>Description:</strong>
      </p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
