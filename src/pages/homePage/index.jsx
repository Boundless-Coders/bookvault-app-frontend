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
        <h1 className="text-5xl font-bold text-white mb-6">
          Welcome to BookVault
        </h1>
        <p className="text-lg text-white mb-8 text-center max-w-xl">
          BookVault is a powerful and intuitive library management app designed
          to simplify book tracking and organization. Whether you’re a book
          enthusiast, a small library owner, or just looking to organize your
          personal collection, BookVault offers an efficient way to manage and
          maintain your books with ease.
        </p>

        {/* Add Book Button */}
        <div className=" flex justify-center gap-2">
        <Link to="/list">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors">
            Explore
          </button>
        </Link>
        {/* Add Book Button */}
        <Link to="/add-new">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors">
            Add a Book
          </button>
        </Link>
        </div>
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
