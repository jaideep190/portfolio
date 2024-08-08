import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  max-width: 800px;
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

const EducationItem = styled(motion.div)`
  background: linear-gradient(135deg, #1e3a8a 0%, #2a4a8a 100%);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
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
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);

    &:before {
      opacity: 1;
    }
  }
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #64ffda;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #e6f1ff;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #8892b0;
  margin-bottom: 0.5rem;
`;

const GPA = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #64ffda;
`;

const educationData = [
  {
    school: "IIIT Naya Raipur",
    degree: "B.Tech in Data Science and Artificial Intelligence",
    period: "Nov 2022 – present",
    gpa: "CGPA: 8.89/10"
  },
  {
    school: "Valley Oak Junior College",
    degree: "Class XII",
    period: "June 2020 - June 2022",
    gpa: "Percentage: 98.4%"
  }
];

function Education() {
  return (
    <EducationContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education
      </Title>
      {educationData.map((item, index) => (
        <EducationItem
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
        >
          <SchoolName>{item.school}</SchoolName>
          <Degree>{item.degree}</Degree>
          <Period>{item.period}</Period>
          <GPA>{item.gpa}</GPA>
        </EducationItem>
      ))}
    </EducationContainer>
  );
}

export default Education;