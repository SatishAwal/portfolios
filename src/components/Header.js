import React from 'react';
import profile from '../assets/self.png'

const Header = () => {
    return (
        <header className="header" id="home">
            <div className="intro">
                <h1>Hi there! 👋</h1>
                <h2>I'm Satish</h2>
                <p>
                    I am a Front-End Developer and student with a solid foundation in creating intuitive, user-centered digital experiences.
                </p>
                <p>
                    With a background in Industrial Design and UX Design, I bring a unique blend of creativity and technical expertise to crafting seamless, engaging interfaces. I’m passionate about improving daily life through thoughtful design, and my ability to collaborate effectively in agile environments allows me to contribute to diverse teams and projects. Currently focused on honing my skills in mobile app development,
                    I’m excited to innovate and create impactful digital solutions for the next generation of products.
                </p>
            </div>
            <div className="profile-image">
                <img src={profile} alt="Satish" width="600" height="600" />
            </div>
        </header>

    )
}

export default Header;
