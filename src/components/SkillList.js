import React from 'react';
import SkillCard from './SkillCard.js'; // Import the SkillCard component
import '../styles/SkillList.css'; // Create this CSS file for styling

const SkillList = () => {
    const skillsData = [
        {
            title: 'Languages',
            skills: ['C#', 'Java', 'Swift', 'JavaScript', 'Python'],
        },
        {
            title: 'Frameworks',
            skills: ['.NET MAUI', 'React Native', 'AngularJS', 'Firebase', 'Node.js'],
        },
        {
            title: 'Tools',
            skills: ['GitHub', 'Figma', 'Azure DevOps', 'Visual Studio', 'Android Studio'],
        }
    ];

    return (
        <div className="skill-list">
            {skillsData.map((category, index) => (
                <SkillCard key={index} title={category.title} skills={category.skills} />
            ))}
        </div>
    );
};

export default SkillList;
