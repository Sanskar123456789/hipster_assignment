import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { theme } = useContext(ThemeContext);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Message sent!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className={`main ${theme}`}>
      <h1 className="text-2xl font-bold mb-4 m-auto">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="card bg-opacity-80 shadow-lg p-6 rounded m-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Your message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="block p-2.5 w-full text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Write your thoughts here..."
            required
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;