import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import BackgroundAnimation from './components/BackgroundAnimation';

const AppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #333;
  background-color: #f8f8f8;
`;

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  color: #333;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #4a90e2;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 50%;
    background-color: #4a90e2;
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

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function App() {
  return (
    <AppContainer>
      
      <AnimatePresence>
        <Nav
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <NavList>
            <NavItem><NavLink to="about" smooth={true} duration={500}>About</NavLink></NavItem>
            <NavItem><NavLink to="projects" smooth={true} duration={500}>Projects</NavLink></NavItem>
            <NavItem><NavLink to="skills" smooth={true} duration={500}>Skills</NavLink></NavItem>
            <NavItem><NavLink to="education" smooth={true} duration={500}>Education</NavLink></NavItem>
            <NavItem><NavLink to="contact" smooth={true} duration={500}>Contact</NavLink></NavItem>
          </NavList>
        </Nav>
      </AnimatePresence>
      
      
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