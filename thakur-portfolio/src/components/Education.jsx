import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const EducationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const EducationItem = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SchoolName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #3498db;
`;

const Degree = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 0.5rem;
`;

const GPA = styled.p`
  font-size: 1rem;
  font-weight: bold;
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