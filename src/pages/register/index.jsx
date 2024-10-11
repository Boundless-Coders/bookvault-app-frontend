import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    console.log('Registration data:', formData);
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="container mx-auto p-4 flex justify-center">
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-400">
            Register
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="username"
                className="block mb-2 text-gray-700 text-lg font-semibold"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 text-lg font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block mb-2 text-gray-700 text-lg font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-gray-700 text-lg font-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
              />
            </div>

            {error && <p className="text-red-500 text-center">{error}</p>}

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-[200px] py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600"
              >
                Register
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-green-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
