import React from 'react';
import './About.css';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="about-section section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper animate-fade-in">
            <div className="about-image-container">
              <img 
                src="/foto2.jpg" 
                alt="JH Instituto em atendimento" 
                className="about-image"
              />
            </div>
          </div>
          <div className="about-content animate-fade-in">
            <h2 className="section-title text-left">
              Nossa <span className="highlight-text">História</span>
            </h2>
            <p className="about-text">
              O <strong>JH Instituto</strong> nasceu de uma promessa: criar uma instituição que formasse nutricionistas e profissionais da saúde capazes de cuidar de pessoas com conhecimento, empatia e humanidade.
            </p>
            <p className="about-text">
              A sigla JH é uma homenagem ao meu pai, grande inspiração para a criação do Instituto. Durante 52 dias em que permaneci internada ao lado dele, acompanhando sua recuperação de uma cirurgia cardíaca, vivi de perto histórias de dor, esperança, angústia e superação. Cada leito carregava uma realidade diferente, e foi nesse ambiente que compreendi que o verdadeiro cuidado vai muito além de tratar uma doença.
            </p>
            <p className="about-text">
              Dessa experiência nasceu o propósito do JH Instituto: formar profissionais humanizados, que enxergam o paciente como um ser humano completo, respeitando sua história, sua condição socioeconômica e sua realidade de vida.
            </p>
            
            <a href="#metodo" className="btn btn-primary mt-2">Nossa Missão e Valores</a>
          </div>
        </div>
      </div>
    </section>
  );
}
