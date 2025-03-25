import React, { useEffect, useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
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
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Let’s Connect!</h2>
        <p className="contact-description">
          If you’re impressed with what you’ve seen so far and think I’d be a great fit for your team or project,
          feel free to reach out! I’m always open to exciting opportunities, collaborations, or even a quick tech chat.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>sabarishlive2@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/sabarish-manivannan/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              linkedin.com/in/sabarish-manivannan
            </a>
          </div>
        </div>

        <p className="contact-description">
          Let’s build something amazing together. Download my resume to know more about my work and experience.
        </p>

        <a className='contact-button'
            href="/Portfolio/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer">
            <FaFileDownload className="download-icon" /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;
