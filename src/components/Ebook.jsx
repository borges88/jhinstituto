import React, { useEffect } from 'react';
import './Ebook.css';

export default function Ebook() {
  useEffect(() => {
    // Rola para o topo ao montar o componente
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ebook-page">
      <section className="ebook-hero">
        <div className="ebook-wrap">
          <div>
            <span className="ebook-eyebrow">Guia prático &mdash; JH Instituto</span>
            <h1>Sua primeira consulta não precisa começar com as mãos tremendo.</h1>
            <p className="lede">Um roteiro clínico completo, do acolhimento ao retorno, para nutricionistas que aprenderam a teoria na faculdade e agora precisam da sequência prática de uma consulta real.</p>
            <div className="cta-row">
              <a className="ebook-btn" href="#oferta">Quero o meu roteiro agora <span aria-hidden="true">&rarr;</span></a>
              <a className="ebook-btn secondary" href="#dentro">Ver o que tem dentro</a>
            </div>
            <p className="microcopy">E-book digital &middot; acesso imediato &middot; leitura em qualquer dispositivo</p>
          </div>
          <div className="cover-image-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/e-book-guia-nutriciona-jessica-herculano.png" alt="Capa do E-book Consulta Nutricional" style={{ width: '100%', maxWidth: '460px', filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.4))' }} />
          </div>
        </div>
      </section>

      <div className="ebook-wrap" style={{ textAlign: 'center', paddingTop: '72px', paddingBottom: '20px' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '46px', color: 'var(--ebook-forest-deep)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.15' }}>
          Guia Prático da Consulta Nutricional
        </h2>
      </div>

      <section className="pain" style={{ paddingTop: '40px' }}>
        <div className="ebook-wrap">
          <div className="pain-header">
            <div className="head" style={{ marginBottom: 0 }}>
              <span className="ebook-eyebrow">Se algo disso soa familiar</span>
              <h2>A faculdade te ensinou a teoria. Ninguém te ensinou o que fazer no minuto em que o paciente senta na sua frente.</h2>
            </div>
            <div className="pain-image">
              <img src="/livros-consulta-nutricional-jh-instituto.jpeg" alt="Livros Consulta Nutricional JH Instituto" />
            </div>
          </div>
          <div className="pain-grid" style={{ marginTop: '48px' }}>
            <div className="pain-cell">
              <span className="mark">&ldquo;E se eu esquecer alguma pergunta importante?&rdquo;</span>
              <p>Você monta a ficha de anamnese, mas na hora H a conversa foge do roteiro e você não sabe como retomar sem parecer robótica.</p>
            </div>
            <div className="pain-cell">
              <span className="mark">&ldquo;Como eu meço isso sem constranger o paciente?&rdquo;</span>
              <p>Antropometria, exames, perguntas sobre peso e hábitos: tudo isso pode gerar desconforto se você não souber conduzir com técnica e empatia.</p>
            </div>
            <div className="pain-cell">
              <span className="mark">&ldquo;Fiz tudo certo e o paciente não voltou.&rdquo;</span>
              <p>Um plano tecnicamente correto que ninguém segue não vale nada. Falta a ponte entre o diagnóstico nutricional e a adesão real.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bridge">
        <p>&ldquo;Este é o roteiro prático que eu gostaria de ter tido no início da minha própria carreira.&rdquo; Jessica Herculano da Silva</p>
      </div>

      <section className="inside" id="dentro">
        <div className="ebook-wrap">
          <div className="inside-header">
            <div className="head">
              <span className="ebook-eyebrow">O que você recebe</span>
              <h2>15 capítulos que transformam a teoria da faculdade em uma consulta que flui do início ao fim.</h2>
              <p>Estruturado na ordem exata em que uma consulta acontece de verdade, para você abrir o e-book e saber exatamente em qual etapa está.</p>
            </div>
            <div className="inside-image">
              <img src="/nutricionista-jessica-herculano-atendendo.jpeg" alt="Nutricionista Jessica Herculano Atendendo" />
            </div>
          </div>

          <div className="roadmap">
            <div className="stage">
              <span className="idx">I</span>
              <div>
                <h3>Antes do paciente sentar</h3>
                <p>Como organizar consultório, materiais e cabeça para eliminar a insegurança dos primeiros trinta segundos de consulta.</p>
                <div className="chaps">Cap. 1&ndash;2 &middot; Introdução e preparação para a anamnese</div>
              </div>
            </div>
            <div className="stage">
              <span className="idx">II</span>
              <div>
                <h3>A arte da anamnese</h3>
                <p>O roteiro de perguntas, as técnicas de escuta ativa e os erros que fazem o paciente fechar a conversa cedo demais.</p>
                <div className="chaps">Cap. 3 &middot; Técnica de anamnese</div>
              </div>
            </div>
            <div className="stage">
              <span className="idx">III</span>
              <div>
                <h3>Antropometria e exames sem gerar constrangimento</h3>
                <p>A técnica correta de cada medida, o embasamento legal para solicitar exames, e como interpretá-los junto com o quadro clínico.</p>
                <div className="chaps">Cap. 4&ndash;7 &middot; Antropometria e exames laboratoriais</div>
              </div>
            </div>
            <div className="stage">
              <span className="idx">IV</span>
              <div>
                <h3>Comunicação que gera adesão</h3>
                <p>Como traduzir jargão técnico, alinhar expectativas e construir um plano de ação que o paciente realmente consegue seguir.</p>
                <div className="chaps">Cap. 8&ndash;10 &middot; Comunicação e plano de ação</div>
              </div>
            </div>
            <div className="stage">
              <span className="idx">V</span>
              <div>
                <h3>Retorno, acompanhamento e perfis especiais</h3>
                <p>Estrutura de retorno, como medir progresso além da balança, e adaptações para idosos, gestantes, crianças e restrições alimentares.</p>
                <div className="chaps">Cap. 11&ndash;12 &middot; Acompanhamento e perfis específicos</div>
              </div>
            </div>
            <div className="stage">
              <span className="idx">VI</span>
              <div>
                <h3>Checklist final e o cuidado com você</h3>
                <p>Uma revisão direta dos erros mais comuns, e um capítulo dedicado ao bem-estar de quem está do outro lado da mesa.</p>
                <div className="chaps">Cap. 13&ndash;15 &middot; Erros comuns e bem-estar do nutricionista</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="author-strip">
        <div className="ebook-wrap">
          <img src="/jh-instituto-jessica-nutricionista.png" alt="Jessica Herculano da Silva" className="avatar-block" />
          <div>
            <span className="ebook-eyebrow">Quem escreveu este roteiro</span>
            <h3>Jessica Herculano da Silva</h3>
            <p>Nutricionista formada pela IBMR, com pós-graduação em Terapia Nutricional em Pediatria pela UFRJ e em Nutrição na Terceira Idade. Idealizadora do JH Instituto Multidisciplinar, dedicado a capacitar nutricionistas para atuarem com confiança e segurança técnica.</p>
            <div className="cred-row">
              <div className="cred"><b>7 anos</b>de atuação clínica</div>
              <div className="cred"><b>5 anos</b>como nutricionista geriátrica em ILPI</div>
              <div className="cred"><b>CRN4</b>19100780</div>
            </div>
          </div>
        </div>
      </section>

      <section className="forwhom">
        <div className="ebook-wrap">
          <div className="list-block">
            <h2>Este e-book é para você que&hellip;</h2>
            <ul>
              <li><span className="check">&check;</span> Está recém-formada e vai atender seus primeiros pacientes</li>
              <li><span className="check">&check;</span> Sente que domina a teoria, mas trava na hora de conduzir a consulta na prática</li>
              <li><span className="check">&check;</span> Quer um roteiro claro, sem depender só da própria memória sob pressão</li>
              <li><span className="check">&check;</span> Está montando o próprio consultório e quer transmitir profissionalismo desde a primeira consulta</li>
            </ul>
          </div>
          <div className="list-block">
            <h2>Não é para você que&hellip;</h2>
            <ul>
              <li><span className="cross">&times;</span> Busca protocolos prontos de manejo clínico de patologias específicas</li>
              <li><span className="cross">&times;</span> Quer um curso com aulas em vídeo e mentoria ao vivo</li>
              <li><span className="cross">&times;</span> Já atua há anos e domina completamente a condução da consulta</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bonus">
        <div className="ebook-wrap">
          <div>
            <span className="ebook-eyebrow">O capítulo que ninguém fala sobre</span>
            <h2>Cuidar do paciente também passa por cuidar de você.</h2>
            <p>Além do passo a passo técnico, o e-book reserva um capítulo inteiro para a sobrecarga emocional da profissão, porque um profissional exausto tem menos capacidade de escuta, paciência e presença, exatamente os recursos que tornam uma consulta eficaz.</p>
          </div>
          <div className="bonus-card">
            <span className="bonus-tag">Capítulo 14</span>
            <h3>Cuidando de você também</h3>
            <p>Como reconhecer a sobrecarga emocional, separar dedicação profissional de responsabilidade pelo resultado do paciente, e construir uma rotina clínica sustentável a longo prazo.</p>
          </div>
        </div>
      </section>

      <section className="offer" id="oferta">
        <div className="ebook-wrap">
          <span className="ebook-eyebrow">Acesso imediato</span>
          <h2>Leve o roteiro completo da sua primeira consulta com confiança para dentro do seu consultório hoje.</h2>
          <p className="sub">E-book digital em PDF, com acesso vitalício e leitura em qualquer dispositivo.</p>
          <div className="price-card">
            <span className="was">De R$ 97,00</span>
            <div className="now">R$ 58<sup>,78</sup></div>
            <p className="terms">ou em até 5x no cartão</p>
            <a className="ebook-btn" style={{ width: '100%', justifyContent: 'center' }} href="https://wa.me/5521997148623?text=Ol%C3%A1%2C%20quero%20comprar%20o%20seu%20e-book" target="_blank" rel="noopener noreferrer">Quero minha consulta com confiança <span aria-hidden="true">&rarr;</span></a>
          </div>
          <div className="guarantee-row">
            <span className="seal">7</span>
            <span>Garantia de 7 dias &mdash; não gostou, devolvemos seu dinheiro.</span>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="ebook-wrap">
          <h2>Perguntas frequentes</h2>
          <div className="faq-item">
            <h4>Eu ainda sou estudante, esse e-book serve para mim?</h4>
            <p>Sim. Ele foi escrito pensando em quem está terminando a faculdade e vai atender os primeiros pacientes, exatamente o momento em que falta a sequência prática que a teoria não ensina.</p>
          </div>
          <div className="faq-item">
            <h4>É um curso com aulas em vídeo?</h4>
            <p>Não, é um e-book digital em PDF. Se você procura mentoria ao vivo com supervisão, a JH Instituto também tem esse formato, fale com a gente para saber mais.</p>
          </div>
          <div className="faq-item">
            <h4>Ele ensina a tratar patologias específicas?</h4>
            <p>Não é esse o foco. O e-book ensina a estrutura e a técnica de condução da consulta em si, a base que se aplica a qualquer perfil de paciente.</p>
          </div>
          <div className="faq-item">
            <h4>Como recebo o material?</h4>
            <p>Após a confirmação do pagamento, você recebe o link de download do PDF no e-mail cadastrado, com acesso imediato e vitalício.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="ebook-wrap">
          <h2>Sua próxima consulta pode ser a primeira que você conduz com segurança do início ao fim.</h2>
          <a className="ebook-btn secondary" href="#oferta">Garantir meu e-book agora</a>
        </div>
      </section>
    </div>
  );
}
