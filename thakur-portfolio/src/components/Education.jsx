import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  max-width: 800px;
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

const EducationItem = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const GPA = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #4a90e2;
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