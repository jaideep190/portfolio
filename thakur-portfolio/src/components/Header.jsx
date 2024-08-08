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
  position: relative;
  overflow: hidden;
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(45deg, #4a90e2, #63b3ed);
  opacity: 0.1;
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

const ProfileImage = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 2rem;
  background-image: url('path_to_your_image.jpg');
  background-size: cover;
  background-position: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <BackgroundShape
        initial={{ scale: 0, x: '-50%', y: '-50%' }}
        animate={{ scale: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
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
          href="https://drive.google.com/file/d/1BAg5WM7nKJbmFPS5Xw9v8rYbHRRYtULZ/view?usp=sharing"
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