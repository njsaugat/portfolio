import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blobs from './components/Blobs';
import Tagline from './components/Tagline';
import Juggle from './components/Juggle';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App bg-black w-screen h-screen  ">
      {/* <Navbar /> */}
      {/* <Blobs />
      <Tagline /> */}
      <Hero />
      <About />
      <Projects />
      {/* <Juggle /> */}
    </div>
  );
}

export default App;
