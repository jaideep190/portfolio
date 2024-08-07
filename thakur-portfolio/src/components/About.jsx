import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;

function About() {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </Title>
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a passionate B.Tech student in Data Science and Artificial
        Intelligence at IIIT Naya Raipur. With a strong foundation in
        mathematics and programming, I've developed various projects that
        showcase my skills in machine learning, computer vision, web
        development, and software engineering. I'm particularly interested
        in applying AI and software development to solve real-world problems.
        My goal is to continue pushing the boundaries of contributing to innovative 
        solutions that make a positive impact on society.
      </Content>
    </AboutContainer>
  );
}

export default About;
