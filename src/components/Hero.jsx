import React from 'react';
import './Hero.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Cuidado, Empatia e Ciência</span>
          <h1 className="hero-title">
            Formando profissionais com foco na <span className="highlight">humanização</span>.
          </h1>
          <p className="hero-text">
            Acreditamos que a nutrição vai muito além da estética: ela é saúde, é prevenção e, acima de tudo, é uma ferramenta que gera e sustenta a vida.
          </p>
          <div className="hero-buttons">
            <a href="#sobre" className="btn btn-primary">
              Nossa História <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#metodo" className="btn btn-outline">
              O Instituto
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          {/* Placeholder for nutritionist image */}
          <div className="hero-image-placeholder">
            <img 
              src="/nutricionista-jessica-herculano-instituto.png" 
              alt="Jéssica Herculano - Nutricionista" 
              className="hero-image"
            />
          </div>
          {/* Decorative Elements */}
          <div className="blob-shape blob-1"></div>
          <div className="blob-shape blob-2"></div>
        </div>
      </div>
    </section>
  );
}
