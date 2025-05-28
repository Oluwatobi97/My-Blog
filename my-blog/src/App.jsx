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
import Projects from "./Page/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preferred color scheme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
    }
  }, []);

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-col min-h-screen">
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main className="flex-grow">
          <div className="container py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/blog-detail" element={<BlogDetail />} />
              <Route path="/TechnicalSkills" element={<TechnicalSkills />} />
              <Route path="/CareerGoals" element={<CareerGoals />} />
              <Route path="/FirstProject" element={<FirstProject />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
