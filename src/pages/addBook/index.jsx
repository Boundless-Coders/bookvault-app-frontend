import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";

const AddBook = () => {
  const [authors, setAuthors] = useState([]);

  const getAuthors = async () => {
    const response = await axios.get(`${BASE_URL}/authors`);
    //
    setAuthors(response.data);
  };

  useEffect(() => {
    getAuthors();
  }, []);

  // const [book, setBook] = useState({
  //   title: "",
  //   author: "",
  //   description: "",
  //   genre: "",
  //   publicationDate: "",
  // });

  // const authors = [
  //   { id: 1, name: "Colleen Hoover" },
  //   { id: 2, name: "F. Scott Fitzgerald" },
  //   { id: 3, name: "Paulo Coelho" },
  //   { id: 4, name: "Leo Tolstoy" },
  //   { id: 5, name: "Harper Lee" }
  // ];

  // const genres = [
  //   "Romance",
  //   "Tragedy",
  //   "Adventure Fiction",
  //   "Realest Novel",
  //   "Southern Gothic"
  // ];

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
      navigate("/");
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center text-green-600">
            Add New Book
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-semibold text-gray-700">
                Title:
              </label>
              <input
                type="text"
                name="title"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Author:
              </label>
              <select
                name="authors"
                id="authors"
                className="w-full px-4 py-2 border rounded-md"
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
            <div>
              <label className="block font-semibold text-gray-700">
                Description:
              </label>
              <textarea
                name="description"
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Genre:
              </label>
              <textarea
                name="genre"
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>
              {/* <select
                name="genre"
                className="w-full px-4 py-2 border rounded-md"
                required
              >
                {/* <option value=""></option>
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))} */}
              {/* </select> } */}
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Publisher:
              </label>
              <input
                type="text"
                name="publisher"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700">
                Publication Date:
              </label>
              <input
                type="number"
                name="publicationDate"
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-[200px] text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddBook;
