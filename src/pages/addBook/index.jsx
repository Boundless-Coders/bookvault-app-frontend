import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";
import { Link } from "react-router-dom";

const AddBook = () => {
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]); // State to manage books

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    setAuthors(response.data);
  };

  const getBooks = async () => {
    const response = await axios.get(`${BASE_URL}/books`);
    setBooks(response.data); // Fetch and set books
  };

  useEffect(() => {
    getAuthors();
    getBooks();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);

      const response = await axios.post(`${BASE_URL}/books`, {
        title: formData.get("title"),
        author: formData.get("author"),
        description: formData.get("description"),
        genre: formData.get("genre"),
        publicationDate: formData.get("publicationDate"),
        publisher: formData.get("publisher"),
      });

      console.log("Book added successfully:", response.data);
      navigate("/"); // Navigate to home after adding the book
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Delete function
  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`${BASE_URL}/books/${bookId}`);
      setBooks(books.filter((book) => book._id !== bookId)); // Update books state after deletion
      console.log(`Book with ID ${bookId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="container mx-auto p-4 flex justify-center">
          <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-400 ">
              Add Book
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                  required
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Author:
                </label>
                <select
                  name="author"
                  id="authors"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                  required
                >
                  <option value=""></option>
                  {authors.map((author) => {
                    return (
                      <option key={author._id} value={author._id}>
                        {author.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Description:
                </label>
                <textarea
                  name="description"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                ></textarea>
              </div>
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Genre:
                </label>
                <textarea
                  name="genre"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                ></textarea>
              </div>
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Publisher:
                </label>
                <input
                  type="text"
                  name="publisher"
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                />
              </div>
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Publication Date:
                </label>
                <input
                  type="date"
                  name="publicationDate"
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div className="flex justify-center mt-6 gap-2">
                <button
                  type="submit"
                  className="w-[150px] py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600"
                >
                  Add Book
                </button>

                <Link to="/books/edit/:id">
          <button className="w-[150px] py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600">
            Edit a Book
          </button>
        </Link>
              </div>
            </form>

            {/* Displaying the list of books
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center text-green-400">Books List</h2>
              <ul>
                {books.map((book) => (
                  <li key={book._id} className="mb-4">
                    <div className="flex justify-between">
                      <span>{book.title}</span>
                      <button
                        onClick={() => handleDelete(book._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddBook;
