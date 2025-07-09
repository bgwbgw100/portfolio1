import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = {
    Backend: ['Java', 'Spring Boot', 'Nginx'],
    Frontend: ['React', 'JavaScript', 'JSP', 'ThymeLeaf'],
    Database: ['Oracle'],
    Mobile: ['Flutter']
  };

  return (
    <section className="skills">
      <h2><i class="fas fa-cogs"></i> 보유 기술 및 자격증</h2>
      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="certification">
        <h3><i class="fas fa-certificate"></i> 자격증</h3>
        <p>정보처리기사</p>
      </div>
      <div className="contact-info">
        <h3><i class="fas fa-envelope"></i> 연락처</h3>
        <p><a href="mailto:bgwbgw1001@gmail.com">bgwbgw1001@gmail.com</a></p>
      </div>
    </section>
  );
}

export default Skills;
