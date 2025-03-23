import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaLinkedin, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
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
    <section className={`contact-section ${isVisible ? 'visible' : ''}`} id="contact" ref={sectionRef}>
      <div className="contact-container">
        <h2 className="contact-title delay-1">Let’s Connect!</h2>
        <p className="contact-description delay-2">
          If you’re impressed with what you’ve seen so far and think I’d be a great fit for your team or project,
          feel free to reach out! I’m always open to exciting opportunities, collaborations, or even a quick tech chat.
        </p>

        <div className="contact-info">
          <div className="contact-item delay-3">
            <FaEnvelope className="contact-icon" />
            <span>sabarishlive2@gmail.com</span>
          </div>
          <div className="contact-item delay-4">
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

        <p className="contact-description delay-5">
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
