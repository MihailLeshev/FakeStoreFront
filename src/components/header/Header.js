// src/components/Header.js

import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <a href="/" className="left">Fake.S</a>
        <div className="right">
          <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-button" onClick={toggleMenu}>
              |||
            </div>
            <div className={`menu ${isMenuOpen ? "open" : ""}`}>
              <a href="/loginmenu" className="menu-item" onClick={toggleMenu}>
                Войти
              </a>
              <a href="/" className="menu-item" onClick={toggleMenu}>
                Home
              </a>
              <a href="/latestitems" className="menu-item" onClick={toggleMenu}>
                Latest item
              </a>
              <a href="/page2" className="menu-item" onClick={toggleMenu}>
                Пункт 2
              </a>
              <a href="/contact" className="menu-item" onClick={toggleMenu}>
                Contact
              </a>
              {/* Добавьте дополнительные пункты, если необходимо */}
            </div>
          </div>
        </div>
      </header>
      <div className="header-divider"></div>
    </div>
  );
};

export default Header;
