import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="particles-background"></div>

      <div className="hero-content">
        <h1 className="hero-margin">
          <span className="hero-intro">Hello, I'm </span>
          <span className="hero-name">Sabarish</span>
        </h1>
        <h2 className="hero-subtitle">
          Full Stack Developer | React JS Specialist
        </h2>
        <button className="hero-button"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        >
          <span>Know More About Me</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
