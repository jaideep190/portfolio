import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
  font-weight: 700;
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: #555;
`;

const ProjectLink = styled(motion.a)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a7bc8;
  }
`;

const projects = [
  {
    title: "smartBP",
    description: "A mobile-responsive web app for video-based blood pressure measurement using React frontend and Python backend.",
    link: "https://smart-bp-frontend.vercel.app/",
    githubLink: "https://github.com/jaideep190/smartBP-Frontend"
  },
  {
    title: "MAGU-NET (smartBP)",
    description: "An Android application with TensorFlow Lite integration for real-time blood pressure prediction.",
    link: "https://magu-net-smartbp.vercel.app/",
    githubLink: "https://drive.google.com/file/d/1zpYTLXo45w-gX77kJ8cRXxB94JZKDFwB/view"
  },
  {
    title: "L.M.S (In Progress)",
    description: "A Library Management System with RESTful API using Node.js, Express, and MySQL.",
    link: "https://github.com/jaideep190/library-management-system",
    githubLink: ""
  },
  {
    title: "Triboelectric IoT Security System",
    description: "A home security system using Triboelectricity-based sensors integrated with NodeMCU (ESP8266) and IFTTT.",
    link: "https://drive.google.com/file/d/1LxEA6wzpH99Ns3rQJv8mfHX8f-F4cfmm/view?usp=sharing",
    githubLink: ""
  }
];

function Projects() {
  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              {project.link && (
                <ProjectLink 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  View Project
                </ProjectLink>
              )}
              {project.githubLink && (
                <ProjectLink 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ marginLeft: '1rem' }}
                >
                  About
                </ProjectLink>
              )}
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid> 
    </ProjectsContainer>
  );
}

export default Projects;