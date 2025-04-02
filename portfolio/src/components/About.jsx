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
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={ref} id="about" className={`about-section ${isVisible ? "visible" : ""}`}>
      <div className="about-container">

        <div className="about-left">
          <img src={profilePic} alt="Sabarish Manivannan" className="about-image" />
        </div>

        <div className="about-right">
          <h2 className="about-title">About Me</h2>

          <div className="about-detail about-intro">
            <h3><FaCode className="icon" /> Who am I?</h3>
            <p>
              I'm Sabarish Manivannan, a passionate Full Stack Developer specialized in Front-End ReactJS development. I enjoy building responsive and engaging web applications.
            </p>
          </div>

          <div className="about-detail about-skills">
            <h3><FaCode className="icon" /> Skills</h3>

            <div className="skill">
              <span>HTML</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "html-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>
            </div>

            <div className="skill">
              <span>CSS</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "css-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>
            </div>

            <div className="skill">
              <span>Bootstrap</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "bootstrap-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>
            </div>

            <div className="skill">
              <span>ReactJS</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "react-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>
            </div>

            <div className="skill">
              <span>Node.js</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "node-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">60%</span>
              </div>
            </div>

            <div className="skill">
              <span>MongoDB</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "mongo-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">50%</span>
              </div>
            </div>

            <div className="skill">
              <span>Python</span>
              <div className="skill-bar-container">
                <div className="skill-bar">
                  <div className={`skill-progress ${isVisible ? "python-progress" : ""}`}></div>
                </div>
                <span className="skill-percentage">75%</span>
              </div>
            </div>
          </div>
          
          <div className="about-detail about-education">
            <h3><FaGraduationCap className="icon" /> Education</h3>
            <ul className={`fade-in-list ${isVisible ? "visible" : ""}`}>
              <li>B.Tech Computer Science and Engineering (Cybersecurity) - SRM Institute of Science and Technology, Ramapuram</li>
              <li>CGPA: 8.85</li>
            </ul>
          </div>

          <div className="about-detail about-certificates">
            <h3><FaCode className="icon" /> Certificates</h3>
            <ul className={`fade-in-list ${isVisible ? "visible" : ""}`}>
              <li>Full Stack Web Development - Crampete</li>
              <li>Front-End Development - 1Stop</li>
            </ul>
          </div>

          <div className="about-detail about-hobbies">
            <h3><FaKeyboard className="icon" /> Hobbies</h3>
            <p>I love playing the keyboard and have completed 5 grade certifications in Electronic Keyboards from Trinity College London with Distinctions and Merits.</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
