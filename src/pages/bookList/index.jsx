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
      <div className=" bg-green-100 ">
        <div className="text-3xl mt-4 mb-6 ">
        <h1 className= "flex justify-center text-green-400">Book List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book, index) => {
            return (
              <div key={index} className="flex flex-col w-full items-center">
                {" "}
                
                <img src='https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781398531734/it-ends-with-us-9781398531734_xlg.jpg' alt="book cover" className="h-[300px]" />
                
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
    </div>
  );
};

export default BookList;
