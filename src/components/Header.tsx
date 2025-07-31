import React, { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext, ThemeType } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const themeOptions = [
  { value: "theme1", label: "Theme 1 (Minimal)" },
  { value: "theme2", label: "Theme 2 (Dark)" },
  { value: "theme3", label: "Theme 3 (Colorful)" },
];

const Header: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 shadow bg-opacity-80 z-50 ${theme}`}>
      <Link to="/" className="font-bold text-xl">ThemeApp</Link>
      <nav className="space-x-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((open) => !open)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          {themeOptions.find(opt => opt.value === theme)?.label || "Select Theme"}
          <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              {themeOptions.map(option => (
                <li key={option.value}>
                  <button
                    className={`block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${theme === option.value ? "font-bold" : ""}`}
                    onClick={() => {
                      setTheme(option.value as ThemeType);
                      setDropdownOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;