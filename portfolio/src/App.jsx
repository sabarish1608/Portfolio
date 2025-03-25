import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Navbar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import React, { useRef } from "react";

const App = () => {
  const aboutRef = useRef(null);

  return (
    <>
      <Navbar/>
      <Hero aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
