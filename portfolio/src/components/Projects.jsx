import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css"

const projects = [
  {
    title: "Charity Website",
    description: "A platform for donations, adoptions, and helping children in need.",
    techStack: ["ReactJS", "CSS","Bootstrap"],
    github: "https://github.com/sabarish1608/CharityCare-Website",
    liveDemo: "https://sabarish1608.github.io/CharityCare-Website/",
    workInProgress: true,
  },
  {
    title: "Website Vulnerability Analyzer",
    description: "A tool to detect SSRF and Broken Access Control vulnerabilities visually.",
    techStack: ["ReactJS", "Django"],
    github: "https://github.com/yourgithub/ssrf-bac-scanner",
    liveDemo: "",
    workInProgress: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.workInProgress && <span className="work-in-progress">Work in Progress</span>}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-icons">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-pill">{tech}</span>
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="view-code">
                <FaGithub /> View Code
              </a>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="live-demo">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
