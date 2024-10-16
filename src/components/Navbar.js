// src/Navbar.js
import React from 'react';
import '../styles/navbar.css'; // Import the CSS for styling
import satish from '../assets/satish.png'
import resume from '../assets/Cv.pdf';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={satish} alt="Logo" /> {/* Replace with your logo path */}
            </div>
            <ul className="nav-links">
                <li><a href="#home"><i class="fa fa-user" aria-hidden="true"></i> Home</a></li>
                <li><a href="#projects"><i class="fa fa-sitemap" aria-hidden="true"></i> Projects</a></li>
                <li><a href="#contact"><i class="fa fa-envelope" aria-hidden="true"></i> Contact</a></li>
                <li><a href={resume} target="_blank" rel="noreferrer"><i class="fa fa-file" aria-hidden="true"></i><span> </span>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
