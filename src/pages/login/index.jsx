import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="container mx-auto p-4 flex justify-center">
        <div className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-8">
          <h2 className="text-4xl font-bold mb-6 text-center text-green-400">
            Login
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent focus:border-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out focus:outline-none"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-[200px] py-3 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              <a href="/register" className="text-green-500 hover:underline">
                Create an account
              </a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="/forgot-password" className="text-green-500 hover:underline">
                Forgot password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
