import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const SkillCategory = styled(motion.div)`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  flex: 1;
  min-width: 250px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled(motion.li)`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #555;
`;

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C/C++", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React", "Node.js", "Express", "Flask"]
  },
  {
    title: "Developer Tools",
    skills: ["Git", "VS Code", "Jupyter Notebook"]
  },
  {
    title: "Deployment & Databases",
    skills: ["Render", "Vercel", "MongoDB", "MySQL"]
  },
  {
    title: "Libraries",
    skills: ["TensorFlow", "Scikit-Learn", "OpenCV", "pandas", "NumPy", "Matplotlib"]
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
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