import React, { useRef } from "react";
import "./Hero.css";

const Hero = ({ aboutRef }) => {

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <div className="particles-background"></div>
      <div className="hero-content">
        <h1 className="hero-margin">
          <span className="hero-intro">Hello, I'm </span>
          <span className="hero-name">Sabarish</span>
        </h1>
        <h2 className="hero-subtitle">Full Stack Developer | React JS Specialist</h2>
        <button className="hero-button" onClick={scrollToAbout}>
          Know More About Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
