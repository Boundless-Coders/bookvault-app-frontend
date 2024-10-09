import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

        {/* Navigation to login page
            <Link to="/login">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors">
                    Go to Login
                </button>
            </Link> */}

        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Detailed Book Information
              </h3>
              <p className="text-gray-600">
                Stores and access comprehensive book data, including
                descriptions, author details, and genres.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Simple Book Management
              </h3>
              <p className="text-gray-600">
                Easily create, edit, and delete books from your library with a
                few clicks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Real-time Feedback
              </h3>
              <p className="text-gray-600">
                Success and error notifications help keep track of actions,
                ensuring a smooth user experience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
