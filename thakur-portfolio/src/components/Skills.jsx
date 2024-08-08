import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #8892b0;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

const SkillsGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillCategory = styled(motion.div)`
  background: linear-gradient(145deg, #1e3a8a, #2a4a8a);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;
  min-width: 250px;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(235deg, #89ff00, #00bcd4, #2575fc);
    z-index: -1;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(100, 255, 218, 0.3);

    &:before {
      opacity: 1;
    }
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #64ffda;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #8892b0;
`;

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express", "Flask", "Django", "Chaquopy", "Material-UI"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "Docker", "VS Code", "Jupyter Notebook", "Vercel", "Render"]
  },
  {
    title: "Deployment & Databases",
    skills: ["Render", "Vercel", "Netlify", "MongoDB", "MySQL", "Sequelize"]
  },
  {
    title: "Libraries",
    skills: ["TensorFlow", "Scikit-Learn", "OpenCV", "pandas", "NumPy", "Matplotlib", "Seaborn"]
  }
];

function Skills() {
  return (
    <SkillsContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Technical Skills
      </Title>
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skillIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;