import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  background-color: #f8f8f8;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #666;
`;

const Button = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background-color: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 3px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  margin: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #3a7bc8;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Name
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Thakur Jaideep Singh
      </Name>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Data Science and AI Enthusiast
      </Title>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Button
          href="https://drive.google.com/file/d/1Hamv-1WGar02FPeROYj24-PhTfO4eyDw/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Resume
        </Button>
        <Button
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </Button>
      </motion.div>
    </HeaderContainer>
  );
}

export default Header;