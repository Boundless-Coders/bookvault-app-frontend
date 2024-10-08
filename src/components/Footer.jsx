import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <footer className="bg-gray-900 text-white mt-8 font-sans">
      <div className="container mx-auto px-2 py-8">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p className="text-base">
              BookVault is dedicated to providing the best library management system to help you organize and manage your book collection efficiently.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-base hover:text-blue-300">Home</a></li>
              <li><a href="/add" className="text-base hover:text-blue-300">Add Book</a></li>
              <li><a href="#" className="text-base hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="text-base hover:text-blue-300">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>  
            <p className="text-base">123 Library Street</p>
            <p className="text-base">Buro, Osu-Accra</p>
            <p className="text-base">Phone: (+233) 559-259-661</p>
            <p className="text-base">Email: boundlesscoders@gmail.com</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows="3"
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Send Message
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-blue-300">
                
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
                
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-blue-300">
               
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} BookVault Library. All rights reserved.</p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        </div>
      </div>
    </footer>
  );
};

export default Footer;