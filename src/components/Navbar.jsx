// Navbar.jsx - Düzeltilmiş navbar
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("anasayfa");
  
  useEffect(() => {
    const onScroll = () => {
      const sections = ["anasayfa", "hakkimda", "projeler"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          return window.scrollY >= el.offsetTop - 150;
        }
        return false;
      });
      setActive(current || "anasayfa");
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#anasayfa" className="navbar-brand text-gradient">
            Mehmet Sönmez
          </a>
          
          <ul className="navbar-menu">
            {["anasayfa", "hakkimda", "projeler"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`navbar-link ${active === id ? "active" : ""}`}
                >
                  {id === "anasayfa" ? "Ana Sayfa" : 
                   id === "hakkimda" ? "Hakkımda" : 
                   "Projelerim"}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="navbar-social">
            <a href="https://github.com/mehmet2725" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/mehmet-s%C3%B6nmez-951215200/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            {/* <a href="https://www.instagram.com/smehmet.exe/" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a> */}
            <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}