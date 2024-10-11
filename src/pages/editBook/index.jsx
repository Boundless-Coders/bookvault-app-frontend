import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated book details:", book);
    navigate(`/books/${id}`);
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="container mx-auto p-4 flex justify-center">
          <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-400 ">
              Edit Book
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                  placeholder=""
                />
              </div>

              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Author:
                </label>
                <input
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                  placeholder=""
                />
              </div>

              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Genre:
                </label>
                <input
                  type="text"
                  name="genre"
                  value={book.genre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                  placeholder=""
                />
              </div>

              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Publication Date:
                </label>
                <input
                  type="date"
                  name="publicationDate"
                  value={book.publicationDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                />
              </div>

              <div className="relative">
                <label className="block mb-2 text-gray-700 text-lg font-semibold">
                  Description:
                </label>
                <textarea
                  name="description"
                  value={book.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
                  rows="4"
                  placeholder=""
                ></textarea>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="w-[200px] py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditBook;
