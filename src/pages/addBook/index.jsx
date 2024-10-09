import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";

import React, { useState } from "react";
import { createBook } from "../../services";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    publishedYear: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
   try {
    event.preventDefault();
    // await createBook(book);
    //  navigate("/");

    // collect form data
    const formData = new FormData(event.target);
    //postbdata to api
    const response = await axios.post(`${BASE_URL}/books`, {
      title: formData.get("title"),
      author: formData.get("author"),
      description: formData.get("description"),
      genre: formData.get("genre"),
      publishedYear: formData.get("publishedYear"),
      title: formData.get("title"),
    });
   } catch (error) {
    console.log(error);
   }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="jpg min-h-screen flex items-center justify-center ">
        <div className=" p-4">
          <h1 className="text-2xl font-bold mb-2 text-blue-200">
            Add New Book
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block font-bold text-black-700">Title</label>
              <input
                type="text"
                name="title"
                className="w-[500px] px-4 py-2 border"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 font-bold">Author</label>
              <input
                type="text"
                name="author"
                className="w-[500px] px-4 py-2 border"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 font-bold">
                Description
              </label>
              <textarea
                name="description"
                className="w-[500px] px-4 py-2 border"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-black-700 font-bold">Genre</label>
              <input
                type="text"
                name="genre"
                className="w-[500px] px-4 py-2 border"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 font-bold">
                Publisher
              </label>
              <input
                type="number"
                name="publisher"
                className="w-[500px] px-4 py-2 border"
              />
            </div>
            <div className="mb-4">
              <label className="block text-black-700 font-bold">
                Publication Date
              </label>
              <input
                type="number"
                name="publicationDate"
                className="w-[500px] px-4 py-2 border"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Book
            </button>
          </form>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddBook;
