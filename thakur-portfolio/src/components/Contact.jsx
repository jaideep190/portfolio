import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactInfo = styled(motion.div)`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ContactIcon = styled.span`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #3498db;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
`;

const ContactLink = styled.a`
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
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
        <ContactItem>
          <ContactIcon>📞</ContactIcon>
          <ContactText>+919515469014</ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>✉️</ContactIcon>
          <ContactText>
            <ContactLink href="mailto:ajaiajai710@gmail.com">ajaiajai710@gmail.com</ContactLink>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>🔗</ContactIcon>
          <ContactText>
            <ContactLink href="https://www.linkedin.com/in/jaideep190" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </ContactLink>
          </ContactText>
        </ContactItem>
        <ContactItem>
          <ContactIcon>💻</ContactIcon>
          <ContactText>
            <ContactLink href="https://github.com/jaideep190" target="_blank" rel="noopener noreferrer">
              GitHub
            </ContactLink>
          </ContactText>
        </ContactItem>
        {/* <ContactItem>
          <ContactIcon>🧩</ContactIcon>
          <ContactText>
            <ContactLink href="https://leetcode.com/your-username" target="_blank" rel="noopener noreferrer">
              LeetCode
            </ContactLink>
          </ContactText>
        </ContactItem> */}
      </ContactInfo>
    </ContactContainer>
  );
}

export default Contact;