import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
//   background: linear-gradient(to bottom, #0a192f, #112240);  
  color: #8892b0;
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  color: #333333;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background-color: #1e3a8a;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
    z-index: -1;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 6px 12px rgba(100, 255, 218, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:before {
      opacity: 1;
    }
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Source Code Pro', monospace;
  color: #e6f1ff;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-family: 'Roboto Mono', monospace;
`;

const ProjectLink = styled(motion.a)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #64ffda;
  color: #0a192f;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Source Code Pro', monospace;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00bcd4;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
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
    githubLink: ""
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100
    }
  }
};

function Projects() {
  return (
    <ProjectsContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
      >
        &lt;Projects /&gt;
      </Title>
      <ProjectGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={cardVariants}
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
                >
                  View Project
                </ProjectLink>
              )}
              &nbsp; {/* Adding space here */}
              &nbsp; {/* Adding more space here */}
              &nbsp; {/* Adding more space here */}
              &nbsp; {/* Adding more space here */}
              &nbsp; {/* Adding more space here */}
              &nbsp; {/* Adding more space here */}
              &nbsp; {/* Adding more space here */}
              &nbsp; {/* Adding more space here */}
              {project.githubLink && (
                <ProjectLink 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
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