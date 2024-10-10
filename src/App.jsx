import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BookList from "./pages/bookList";
import AddBook from "./pages/addBook";
import BookDetails from "./pages/bookDetails";
import EditBook from "./pages/editBook";
import Login from "./pages/login";
import Home from "./pages/homePage";
import Register from "./pages/register";
import Testimonials from "./pages/testimonials";
import AboutUs from "./pages/aboutUs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/list",
      element: <BookList />,
    },

    {
      path: "/add-new",
      element: <AddBook />,
    },
    {
      path: "/books/:id",
      element: <BookDetails />,
    },
    {
      path: "/books/edit/:id",
      element: <EditBook />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/testimonials",
      element: <Testimonials />
    },
    {
      path: "/about",
      element: <AboutUs />
    }
  ]);


  return <RouterProvider router={router} />;
}

export default App;
