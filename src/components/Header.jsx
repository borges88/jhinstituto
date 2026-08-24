import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header glass">
      <div className="container header-container">
        <div className="logo">
          <h2>JH Instituto</h2>
          <p>Ensino & Saúde</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Nossa História</a></li>
            <li><a href="#metodo">Missão e Valores</a></li>
            <li><a href="https://wa.me/5521964776890" target="_blank" rel="noopener noreferrer">Contato</a></li>
          </ul>
        </nav>

        {/* Social Icons Desktop */}
        <div className="social-icons desktop-only">
          <a href="https://www.instagram.com/nutrijessicaherculano?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav animate-fade-in">
          <ul>
            <li><a href="#inicio" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Nossa História</a></li>
            <li><a href="#metodo" onClick={() => setIsMenuOpen(false)}>Missão e Valores</a></li>
            <li><a href="https://wa.me/5521964776890" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
          <div className="social-icons-mobile">
            <a href="https://www.instagram.com/nutrijessicaherculano?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={24} /></a>
          </div>
        </nav>
      )}
    </header>
  );
}
