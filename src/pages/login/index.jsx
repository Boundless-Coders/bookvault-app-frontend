import React, { useState } from 'react';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const toggleForms = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    alert(`Login attempted with Email: ${loginEmail}`);
    // Add your login logic here (e.g., API call)
  };

  const handleRegister = () => {
    alert(`Registration attempted with Email: ${registerEmail}`);
    // Add your registration logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {isLogin ? (
          <div id="login-form">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="login-email">Email</label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="email"
                id="login-email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="login-password">Password</label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="password"
                id="login-password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <button
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="text-center">
              <a href="#" className="text-blue-500" onClick={toggleForms}>
                Don't have an account? Register
              </a>
            </div>
          </div>
        ) : (
          <div id="register-form">
            <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="register-email">Email</label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="email"
                id="register-email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="register-password">Password</label>
              <input
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                type="password"
                id="register-password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <button
                className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
                onClick={handleRegister}
              >
                Register
              </button>
            </div>
            <div className="text-center">
              <a href="#" className="text-blue-500" onClick={toggleForms}>
                Already have an account? Login
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;