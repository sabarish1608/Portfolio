import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import { FaUser, FaLaptopCode, FaGraduationCap, FaCertificate, FaKeyboard } from 'react-icons/fa';
import profilePic from '../assets/Me1.jpg';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section className={`about-section ${isVisible ? 'visible' : ''}`} ref={sectionRef} id="about">
      <div className="about-container">
        <div className="about-left">
          <img src={profilePic} alt="Sabarish" className="about-image glow" />
        </div>
        <div className="about-right">
          <h2 className="about-title">About Me</h2>

          <p className="about-detail delay-1">
            <FaUser className="icon" /> <strong>Who am I?</strong><br />
            I’m Sabarish Manivannan, a passionate Full Stack Developer specialized in Front-End ReactJS development. I enjoy building responsive and engaging web applications.
          </p>

          <p className="about-detail delay-2">
            <FaLaptopCode className="icon" /> <strong>Skills</strong><br />
            HTML • CSS • Bootstrap • ReactJS • Node.js • MongoDB • Python
          </p>

          <p className="about-detail delay-3">
            <FaGraduationCap className="icon" /> <strong>Education</strong><br />
            • B.Tech Computer Science with specialization in Cybersecurity,<br />
            • SRM Institute of Science and Technology, Ramapuram<br />
            • CGPA: 8.85
          </p>

          <p className="about-detail delay-4">
            <FaCertificate className="icon" /> <strong>Certificates</strong><br />
            • Full Stack Web Development – Crampete<br />
            • Front-End Development – 1Stop
          </p>

          <p className="about-detail delay-5">
            <FaKeyboard className="icon" /> <strong>Hobbies</strong><br />
            I love playing the keyboard and have completed 5 grade certifications from Trinity College London with Distinctions and Merits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
