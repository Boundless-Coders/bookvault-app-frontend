import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import React, { useState, useEffect } from 'react';
import { getBookById, updateBook } from "../../services";
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = () => {
  const { id } = useParams();  // To get the book ID from the URL
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    genre: '',
    publishedYear: ''
  });
  const [loading, setLoading] = useState(true);  // Loading state for fetching data
  const [error, setError] = useState('');  // Error state to display any fetching errors
  const navigate = useNavigate();

  // Fetch the book details when the component mounts
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookById(id);  // Fetch the book by ID
        setBook(response.data);  // Populate form fields with fetched data
        setLoading(false);
      } catch (err) {
        console.error('Error fetching the book:', err);
        setError('Error fetching book data. Please try again.');
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // Handle input changes to update the form state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  // Handle form submission to update the book details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);  // Send the updated book data to the backend
      navigate('/');  // Redirect to the home page or book list after updating
    } catch (err) {
      console.error('Error updating the book:', err);
      setError('Failed to update the book. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;  // Display loading message while fetching data
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;  // Display error message if any
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
<div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={book.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Published Year</label>
          <input
            type="number"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
            className="w-full px-4 py-2 border"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Book
        </button>
      </form>
    </div>
    <div>
      <Footer />
    </div>
    
    </div>
  );
};

export default EditBook;
