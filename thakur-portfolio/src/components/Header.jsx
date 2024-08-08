import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';  // Import the BackgroundAnimation component

const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  overflow: hidden;
  position: relative;
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-family: 'Source Code Pro', monospace;
  z-index: 1;
`;

const Button = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  font-family: 'Source Code Pro', monospace;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff00ff, #00ffff, #00ff00, #ff00ff);
    z-index: -1;
    filter: blur(5px);
    background-size: 400%;
    animation: glowing 20s linear infinite;
  }

  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const CodeSnippet = styled(motion.div)`
  font-family: 'Source Code Pro', monospace;
  font-size: 1rem;
  opacity: 0.7;
  position: absolute;
  color: #00ffff;
  z-index: 1;
`;

function Header() {
  const codeControls = useAnimation();

  useEffect(() => {
    const animateCode = async () => {
      await codeControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await codeControls.start({ opacity: 0, transition: { duration: 0.5, delay: 2 } });
      animateCode();
    };
    animateCode();
  }, [codeControls]);

  return (
    <HeaderContainer>
      <BackgroundAnimation /> 
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
      <Button
        href="https://drive.google.com/file/d/1Hamv-1WGar02FPeROYj24-PhTfO4eyDw/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ marginBottom: '1rem' }}
      >
        Resume
      </Button>
      <Button
        href="#contact"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ marginBottom: '1rem' }}
      >
        Get in Touch
      </Button>
      <CodeSnippet
        initial={{ opacity: 0, y: 20 }}
        animate={codeControls}
        style={{ top: '10%', left: '5%' }}
      >
        {`while (true) { learnNewSkills(); }`}
      </CodeSnippet>
      <CodeSnippet
        initial={{ opacity: 0, y: 20 }}
        animate={codeControls}
        style={{ bottom: '10%', right: '5%' }}
      >
        {`if (coffee.isEmpty()) { refill(); }`}
      </CodeSnippet>
    </HeaderContainer>
  );
}

export default Header;