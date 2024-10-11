import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBookById = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/book/${id}`);
      return response;
    } catch (error) {
      console.error("Error fetching book details:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchBook = async () => {
      const result = await getBookById(id);
      if (result) {
        setBook(result.data);
      }
      setLoading(false);
    };
    fetchBook();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!book) {
    return <div className="text-center text-xl text-red-600">Book not found!</div>;
  }

  return (
    <div className="bg-green-100">
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">{book.title}</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Display book cover */}
        <div className="flex justify-center mb-4">
          <img 
            src={book.cover} 
            alt={`${book.title} cover`} 
            className="h-64 w-auto object-cover" 
          />
        </div>
        <p className="text-lg">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-lg">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="text-lg">
          <strong>Publication Date:</strong> {book.publicationDate}
        </p>
        <p className="text-lg mt-4">
          <strong>Description:</strong>
        </p>
        <p className="text-base text-gray-700 mt-2">{book.description}</p>
      </div>
    </div>
    </div>
  );
};

export default BookDetails;
