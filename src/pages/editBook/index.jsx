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
    // Normally, you'd call an API to save this data, but here we're just logging it
    navigate(`/books/${id}`); // Simulate a redirect after submission
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="container mx-auto p-4 flex justify-center">
        <div className="w-full max-w-lg">  
          <h1 className="text-3xl font-bold mb-4 text-center text-green-600">Edit Book</h1>
          
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div>
              <label className="block mb-2">
                Title:
                <input
                  type="text"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </label>
            </div>
            <div>
              <label className="block mb-2">
                Author:
                <input
                  type="text"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </label>
            </div>
            <div>
              <label className="block mb-2">
                Genre:
                <input
                  type="text"
                  name="genre"
                  value={book.genre}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </label>
            </div>
            <div>
              <label className="block mb-2">
                Publication Date:
                <input
                  type="date"
                  name="publicationDate"
                  value={book.publicationDate}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </label>
            </div>
            <div>
              <label className="block mb-2">
                Description:
                <textarea
                  name="description"
                  value={book.description}
                  onChange={handleChange}
                  className="border p-2 w-full"
                />
              </label>
            </div>
            <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-[200px] text-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
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
