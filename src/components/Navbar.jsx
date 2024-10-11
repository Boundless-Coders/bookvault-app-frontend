
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-green-200 h-16'>
      <div className='logo h-11'>
        <div className='h1 ml-5'>
          <h1>BookVault</h1>
        </div>
      </div>
      <ul className='list-none p-0 flex gap-4 mt-4 font-serif'>
        <li className='no-underline px-4 py-2  rounded-lg text-black hover:bg-green-500 hover:text-white'>
          <Link to="/">Home</Link>
        </li>
        <li className='no-underline px-4 py-2 rounded-lg text-black hover:bg-green-500 hover:text-white'>
          <Link to="/about">About</Link>
        </li>
        <li className='no-underline px-4 py-2 rounded-lg text-black hover:bg-green-500 hover:text-white'>
          <Link to="/testimonials">Reviews</Link>
        </li>
        {/* <li className='no-underline px-4 py-2 rounded-lg text-black hover:bg-green-500 hover:text-white'>
          <Link to="/register">Register</Link>
        </li> */}
        <li className='no-underline inline-block px-4 py-2 rounded text-black hover:bg-green-500 hover:text-white'>
        <Link to="/Login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;
