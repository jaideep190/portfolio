import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #4c5b5c; 
`;

const SkillsGrid = styled.div`
  display: flex; /* Changed from grid to flex for horizontal layout */
  gap: 2rem;
  justify-content: center; /* Aligning items in the center */
`;

const SkillCategory = styled(motion.div)`
  background: linear-gradient(145deg, #1e90ff, #00bfff);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1; /* Added to make each category take equal space */
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #f5f5f5;
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
                <SkillItem key={skillIndex}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;
