import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
