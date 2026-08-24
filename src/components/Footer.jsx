import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-container">
        <div className="footer-col about-col">
          <h3 className="footer-logo">JH Instituto</h3>
          <p className="footer-desc">
            Formando profissionais humanizados e transformando a prática da saúde com ciência e empatia.
          </p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/nutrijessicaherculano?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-col links-col">
          <h4 className="footer-heading">Links Rápidos</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#sobre">Nossa História</a></li>
            <li><a href="#metodo">Missão e Valores</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">Contato</h4>
          <ul>
            <li>
              <Phone size={18} className="contact-icon" />
              <a 
                href="https://wa.me/5521997148623" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                (21) 99714-8623
              </a>
            </li>
            <li>
              <Mail size={18} className="contact-icon" />
              <span>jhinstituto.nutri@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} JH Instituto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
