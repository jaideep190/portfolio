import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';
import profileImage from '../assets/dp.png';

const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  background-color: #f0f0f0;
  position: relative;
  overflow: hidden;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  color: #666;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;  // Increased z-index
  position: relative;  // Added position
  pointer-events: auto;  // Added pointer-events

  &:hover {
    background-color: #3a7bc8;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 2rem;
  background-image: url(${profileImage});  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);   
  z-index: 1;
`;

function Header() {
  return (
    <HeaderContainer>
      <BackgroundAnimation />
      <ProfileImage
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />
      <Name
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Thakur Jaideep Singh
      </Name>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Data Science and AI Enthusiast
      </Title>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <Button
          href="https://drive.google.com/file/d/1cwQ0Xb0x52yeH7X33CpGjKzdyrW7zBtj/view?usp=sharing"
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