import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import React, { useState } from 'react';
import { createBook } from "../../services";
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    genre: '',
    publishedYear: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook(book);
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input type="text" name="title" onChange={handleChange} className="w-full px-4 py-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Author</label>
          <input type="text" name="author" onChange={handleChange} className="w-full px-4 py-2 border" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea name="description" onChange={handleChange} className="w-full px-4 py-2 border"></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Genre</label>
          <input type="text" name="genre" onChange={handleChange} className="w-full px-4 py-2 border" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Published Year</label>
          <input type="number" name="publishedYear" onChange={handleChange} className="w-full px-4 py-2 border" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
      </form>

      <div>
        < Footer />
      </div>
    </div>

    
  );
};

export default AddBook;
