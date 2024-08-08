import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: #8892b0;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`;

const ContactInfo = styled(motion.div)`
  background: linear-gradient(135deg, #1e3a8a 0%, #2a4a8a 100%);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(235deg, #89ff00, #00bcd4, #2575fc);
    z-index: -1;
    filter: blur(10px);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(100, 255, 218, 0.2);

    &:before {
      opacity: 1;
    }
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    color: #64ffda;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #64ffda;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
`;

const ContactLink = styled.a`
  color: #64ffda;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2575fc;
    text-shadow: 0 0 5px rgba(100, 255, 218, 0.5);
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </Title>
      <ContactInfo
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ContactIcon>📞</ContactIcon>
          <ContactText>+919515469014</ContactText>
        </ContactItem>
        <ContactItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ContactIcon>✉️</ContactIcon>
          <ContactText>
            <ContactLink href="mailto:ajaiajai710@gmail.com">ajaiajai710@gmail.com</ContactLink>
          </ContactText>
        </ContactItem>
        <ContactItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ContactIcon>🔗</ContactIcon>
          <ContactText>
            <ContactLink href="https://www.linkedin.com/in/jaideep190" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ContactLink>
          </ContactText>
        </ContactItem>
        <ContactItem whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <ContactIcon>💻</ContactIcon>
          <ContactText>
            <ContactLink href="https://github.com/jaideep190" target="_blank" rel="noopener noreferrer">
              GitHub
            </ContactLink>
          </ContactText>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;