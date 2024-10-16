// src/ProjectCard.js
import React from 'react';
import '../styles/ProjectCard.css'; // Import the CSS for styling


const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>  Github</a>
      </div>
    </div>
  );
};

export default ProjectCard;
