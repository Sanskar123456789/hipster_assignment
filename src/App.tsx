import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        {isLoggedIn ? (
          <>
            <Header setIsLogin={setIsLoggedIn}/>
            <div className="pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route
              path="/*"
              element={<Login onLogin={() => setIsLoggedIn(true)} />}
            />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;