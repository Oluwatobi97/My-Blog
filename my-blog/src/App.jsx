import React, { useState, useEffect } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import BlogDetail from "./Page/BlogDetail";
import TechnicalSkills from "./Component/TechnicalSkills";
import CareerGoals from "./Component/CareerGoals";
import FirstProject from "./Page/AllMyProject/FirstProject";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/blog-detail" element={<BlogDetail />} />
        <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
        <Route path="/CareerGoals" element={<CareerGoals />} />
        <Route path="/FirstProject" element={<FirstProject />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
