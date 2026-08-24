import React from 'react';
import './Methodology.css';
import { Target, Eye, Heart, BookOpen, UserCheck, Star, ShieldCheck } from 'lucide-react';

export default function Methodology() {
  return (
    <section id="metodo" className="methodology-section section">
      <div className="container">
        <h2 className="section-title">Missão, Visão e <span className="highlight-text">Valores</span></h2>
        <p className="methodology-subtitle">
          "Criamos profissionais humanizados com visão no cuidado do próximo, entendendo que a nutrição é muito mais do que estética: ela é saúde, e é a nutrição que gera a vida."
        </p>

        <div className="methodology-grid">
          {/* Missão */}
          <div className="methodology-card">
            <div className="card-icon">
              <Target size={36} />
            </div>
            <h3 className="card-title">Nossa Missão</h3>
            <p className="card-description">
              Instruir e orientar nutricionistas e profissionais da saúde para que atuem com excelência técnica, empatia e humanização, promovendo um cuidado individualizado e acessível à realidade de cada paciente.
            </p>
          </div>

          {/* Visão */}
          <div className="methodology-card">
            <div className="card-icon">
              <Eye size={36} />
            </div>
            <h3 className="card-title">Nossa Visão</h3>
            <p className="card-description">
              Ser referência na formação de profissionais humanizados, transformando a prática da saúde por meio do conhecimento, do cuidado e do respeito à individualidade de cada pessoa.
            </p>
          </div>

          {/* Nosso Propósito */}
          <div className="methodology-card">
            <div className="card-icon">
              <BookOpen size={36} />
            </div>
            <h3 className="card-title">Nosso Propósito</h3>
            <p className="card-description">
              No JH Instituto, formamos profissionais que desenvolvem um olhar clínico amplo, capazes de compreender o paciente dentro do seu contexto biológico, emocional e social. Nosso compromisso é mostrar que a nutrição é saúde, acolhimento e qualidade de vida.
            </p>
          </div>

          {/* Valores */}
          <div className="methodology-card values-card">
            <div className="card-icon">
              <Heart size={36} />
            </div>
            <h3 className="card-title">Nossos Valores</h3>
            <ul className="values-list">
              <li><UserCheck size={16}/> <strong>Humanização:</strong> cuidar de pessoas antes de tratar patologias.</li>
              <li><Heart size={16}/> <strong>Empatia:</strong> compreender a realidade e a história de cada paciente.</li>
              <li><Star size={16}/> <strong>Humildade:</strong> ensinar e aprender com respeito e sensibilidade.</li>
              <li><ShieldCheck size={16}/> <strong>Excelência & Ética:</strong> unir ciência, atualização constante e compromisso com a vida.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
