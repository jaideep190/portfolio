import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  font-weight: 700;
`;

const ContactInfo = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    color: #4a90e2;
  }
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #4a90e2;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  color: #555;
`;

const ContactLink = styled.a`
  color: #4a90e2;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #3a7bc8;
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