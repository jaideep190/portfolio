import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

// Import components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const AppContainer = styled.div`
  font-family: 'Source Code Pro', monospace;
  color: #64ffda;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(10, 25, 47, 0.8);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-weight: 500;
  color: #64ffda;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #2575fc;
    text-shadow: 0 0 5px rgba(100, 255, 218, 0.5);
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background-color: #64ffda;
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackgroundAnimation = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(45deg, #64ffda 25%, transparent 25%),
      linear-gradient(-45deg, #64ffda 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #64ffda 75%),
      linear-gradient(-45deg, transparent 75%, #64ffda 75%);
    background-size: 20px 20px;
    animation: backgroundMove 20s linear infinite;
  }

  @keyframes backgroundMove {
    0% { background-position: 0 0, 10px 0, 10px -10px, 0px 10px; }
    100% { background-position: 20px 20px, 30px 20px, 30px 10px, 20px 30px; }
  }
`;

function App() {
  return (
    <AppContainer>
      <BackgroundAnimation />
      <Nav>
        <NavList>
          <NavItem><NavLink to="about" smooth={true} duration={500}>About</NavLink></NavItem>
          <NavItem><NavLink to="projects" smooth={true} duration={500}>Projects</NavLink></NavItem>
          <NavItem><NavLink to="skills" smooth={true} duration={500}>Skills</NavLink></NavItem>
          <NavItem><NavLink to="education" smooth={true} duration={500}>Education</NavLink></NavItem>
          <NavItem><NavLink to="contact" smooth={true} duration={500}>Contact</NavLink></NavItem>
        </NavList>
      </Nav>

      <Header />

      <Section
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <About />
      </Section>

      <Section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Projects />
      </Section>

      <Section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Skills />
      </Section>

      <Section
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Education />
      </Section>

      <Section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </Section>
    </AppContainer>
  );
}

export default App;