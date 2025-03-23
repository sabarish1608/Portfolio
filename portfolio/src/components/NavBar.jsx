import React, { useState } from 'react';
import './NavBar.css'; // We'll add styles here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('nav-open', !isOpen); // Apply blur to background
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold text-purple" href="#home">
          Sabarish.dev
        </a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end mobile-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={toggleNavbar}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={toggleNavbar}>
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Portfolio/resume.pdf" download onClick={toggleNavbar}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
