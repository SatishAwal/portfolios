// src/ProjectList.js
import React from 'react';
import ProjectCard from './ProjectCard';
import logo_1 from'../assets/logo_1.jpeg';
import logo_2 from'../assets/logo_2.png';
import logo_3 from'../assets/hiking.jpg';
import '../styles/ProjectList.css';

const ProjectList = () => {
    const projects = [
      {
        title: 'Local Business Explorer',
        description: 'A mobile app to help small businesses market and sell products to customers.',
        image: logo_1, // Replace with your image path
        link: 'https://github.com/sushanthapa52/TravelBuddy' // Replace with your project link
      },
      {
        title: 'Travel Buddy',
        description: 'An app for planning trips and adventures with friends.',
        image: logo_2, // Replace with your image path
        link: 'https://github.com/sushanthapa52/TravelBuddy', // Replace with your project link
      },
      {
        title: 'Restaurant Management System',
        description: 'A User Interface design for managing orders and customer seamlessly.',
        image: logo_3, // Replace with your image path
        link: 'https://www.figma.com/design/F2im7TAefqt2iUCJ7AYXNQ/Untitled?node-id=2-6&t=ZVTJaXZYJPNV7coP-1', // Replace with your project link
      },
      // Add more projects as needed
    ];

    return (
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
};

export default ProjectList;
