import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants";


const BookList = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/books`);
      setBooks(response.data); // update the books state
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

 books.map((book) => console.log(book.cover))
  useEffect(() => {
    getBooks();
  }, []); // include getBooks in the dependency array

 
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Book List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => {
            return (
              <div key={index} className="flex flex-col w-full items-center">
                {" "}
                
                <img src='https://drive.google.com/file/d/1xw9xtL4AP6R6dPF3vm-SN2-WwyEJ5kwA/view' alt="book cover" className="h-[300px]" />
                
                <Link to={`/books/${book._id}`} className="text-blue-500">
                  {book.title}
                </Link>{" "}
                
                <p>{book.author.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookList;
