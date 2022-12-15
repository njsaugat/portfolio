import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blobs from './components/Blobs';
import Tagline from './components/Tagline';
import Juggle from './components/Juggle';

function App() {
  return (
    <div className="App bg-black w-screen h-screen text-5xl font-bold">
      <Navbar />
      <Blobs />
      <Tagline />
      <Juggle />
    </div>
  );
}

export default App;
