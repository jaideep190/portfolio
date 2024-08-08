import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';

const HeaderContainer = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #e0e0e0;
  overflow: hidden;
  position: relative;
  background-color: rgba(10, 25, 47, 0.95);
`;

const Name = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  font-family: 'Source Code Pro', monospace;
  font-weight: 300;
  opacity: 0.8;
  z-index: 1;
`;

const Button = styled(motion.a)`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: #64ffda;
  text-decoration: none;
  border-radius: 3px;
  font-weight: 400;
  font-family: 'Source Code Pro', monospace;
  position: relative;
  overflow: hidden;
  border: 1px solid #64ffda;
  z-index: 1;
  margin: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const CodeSnippet = styled(motion.div)`
  font-family: 'Source Code Pro', monospace;
  font-size: 1rem;
  opacity: 0.7;
  position: absolute;
  color: #64ffda;
  z-index: 1;
  background-color: rgba(10, 25, 47, 0.8);
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const CursorFollower = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid #64ffda;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;

function Header() {
  const codeControls = useAnimation();
  const [hoveredSnippet, setHoveredSnippet] = useState(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const animateCode = async () => {
      await codeControls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
      await codeControls.start({ opacity: 0.7, transition: { duration: 0.5, delay: 2 } });
      animateCode();
    };
    animateCode();

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`;
        cursorRef.current.style.left = `${e.clientX}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [codeControls]);

  return (
    <HeaderContainer>
      <BackgroundAnimation />
      <CursorFollower ref={cursorRef} />
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
      <CodeSnippet
        initial={{ opacity: 0, y: 20 }}
        animate={codeControls}
        style={{ top: '10%', left: '5%' }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        onHoverStart={() => setHoveredSnippet('learn')}
        onHoverEnd={() => setHoveredSnippet(null)}
      >
        {hoveredSnippet === 'learn' ? 'function learnNewSkills() {...}' : 'while (true) { learnNewSkills(); }'}
      </CodeSnippet>
      <CodeSnippet
        initial={{ opacity: 0, y: 20 }}
        animate={codeControls}
        style={{ bottom: '10%', right: '5%' }}
        whileHover={{ scale: 1.05, opacity: 1 }}
        onHoverStart={() => setHoveredSnippet('coffee')}
        onHoverEnd={() => setHoveredSnippet(null)}
      >
        {hoveredSnippet === 'coffee' ? 'class Coffee { isEmpty() {...} }' : 'if (coffee.isEmpty()) { refill(); }'}
      </CodeSnippet>
    </HeaderContainer>
  );
}

export default Header;