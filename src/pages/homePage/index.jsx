import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="bg flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to BookVault
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
          BookVault is a powerful and intuitive library management app designed
          to simplify book tracking and organization. Whether you’re a book
          enthusiast, a small library owner, or just looking to organize your
          personal collection, BookVault offers an efficient way to manage and
          maintain your books with ease.
        </p>

        {/* Add Book Button */}
        <Link to="/add-new">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors">
            Add a Book
          </button>
        </Link>

        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
