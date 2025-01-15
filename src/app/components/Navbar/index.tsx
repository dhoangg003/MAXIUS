"use client"
import React, { useState } from "react";
import "./style.scss";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo bên trái */}
      <div className="navbar-logo">MAXIUS</div>

      {/* Menu toggle bên phải */}
      <div className="navbar-menu-toggle" onClick={toggleMenu}>
        <span className="navbar-menu-bar"></span>
        <span className="navbar-menu-bar"></span>
        <span className="navbar-menu-bar"></span>
      </div>

      {/* LanguageSelector nằm dưới menu toggle */}
      <div className="language-selector-container">
        <LanguageSelector />
      </div>

      {/* Fullscreen menu (đè lên) */}
      <div className={`navbar-menu-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Brochure</li>
          <li>Proposal</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
