import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

type LoginProps = {
  onLogin: () => void;
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.email === "user@example.com" && form.password === "password") {
      setError("");
      onLogin();
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <section className={`flex items-center justify-center min-h-screen bg-gray-100 ${theme}`}>
      <form
        onSubmit={handleSubmit}
        className="product-card p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className={`text-2xl font-bold mb-6 text-center`}>Login</h2>
        {error && <div className={`mb-4 text-red-600 text-sm`}>{error}</div>}
        <div className="mb-4">
          <label className={`block mb-2 text-sm font-medium`}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="username"
          />
        </div>
        <div className="mb-6">
          <label className={`block mb-2 text-sm font-medium`}>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            autoComplete="current-password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;