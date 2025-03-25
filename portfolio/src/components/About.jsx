import React, { useEffect, useState } from "react";
import "./About.css";
import { FaCode, FaGraduationCap, FaKeyboard } from "react-icons/fa";
import profilePic from "../assets/Me1.jpg";

const About = React.forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="about" className={`about-section ${isVisible ? "visible" : ""}`}>
      <div className="about-container">
        {/* Left Side - Image */}
        <div className="about-left">
          <img src={profilePic} alt="Sabarish Manivannan" className="about-image" />
        </div>

        {/* Right Side - Content */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2>

          <div className="about-detail">
            <h3><FaCode className="icon" /> Who am I?</h3>
            <p>
              I'm Sabarish Manivannan, a passionate Full Stack Developer specialized in Front-End ReactJS development. I enjoy building responsive and engaging web applications.
            </p>
          </div>

          <div className="about-detail">
            <h3><FaCode className="icon" /> Skills</h3>
            <p>HTML • CSS • Bootstrap • ReactJS • Node.js • MongoDB • Python</p>
          </div>

          <div className="about-detail">
            <h3><FaGraduationCap className="icon" /> Education</h3>
            <p>B.Tech Computer Science (Cybersecurity) - SRM Institute of Science and Technology, Ramapuram</p>
          </div>

          <div className="about-detail">
            <h3><FaCode className="icon" /> Certificates</h3>
            <p>Full Stack Web Development - Crampete</p>
            <p>Front-End Development - 1Stop</p>
          </div>

          <div className="about-detail">
            <h3><FaKeyboard className="icon" /> Hobbies</h3>
            <p>I love playing the keyboard and have completed 5 grade certifications in Electronic Keyboards from Trinity College London with Distinctions and Merits.</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
