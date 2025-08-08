import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.documentElement.className = darkMode ? "dark" : "light";
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);
  
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}