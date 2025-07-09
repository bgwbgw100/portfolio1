import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = ['Java', 'Spring Boot', 'React', 'JavaScript', 'JSP', 'ThymeLeaf', 'Flutter', 'Docker', 'Nginx'];

  return (
    <section className="skills">
      <h2><i class="fas fa-cogs"></i> 보유 기술 및 자격증</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
      <div className="certification">
        <h3><i class="fas fa-certificate"></i> 자격증</h3>
        <p>정보처리기사</p>
      </div>
    </section>
  );
}

export default Skills;
