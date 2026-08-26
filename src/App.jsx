import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Methodology from './components/Methodology';
import Footer from './components/Footer';
import Ebook from './components/Ebook';
import './App.css';

// Componente da página inicial que renderiza as seções atuais
function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Methodology />
    </main>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebook" element={<Ebook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
