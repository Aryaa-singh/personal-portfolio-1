import React from 'react';
import Hero from './components/Hero';
import InPractice from './components/InPractice';
import Impact from './components/Impact';
import Leverage from './components/Leverage';
import Principle from './components/Principle';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />

      <main>
        <InPractice />
        <Impact />
        <Leverage />
        <Principle />
      </main>

      <Footer />
    </div>
  );
}

export default App;
