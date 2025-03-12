import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

// Styled Components
const ContactSection = styled(motion.section)`
  background: linear-gradient(135deg, #2a2a5a, #4a4a8a);
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  position: relative;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 2rem auto;
  gap: 1rem;
  background: transparent;
`;

const Input = styled(motion.input)`
  padding: 0.8rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  font-size: 1rem;
  background: #1a2a44;
  color: #fff;
  transition: border-color 0.3s ease, transform 0.3s ease;
  &:focus {
    border-color: #8A2BE2;
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
`;

const Textarea = styled(motion.textarea)`
  padding: 0.8rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  font-size: 1rem;
  background: #1a2a44;
  color: #fff;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease, transform 0.3s ease;
  &:focus {
    border-color: #8A2BE2;
    outline: none;
  }
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: 2px solid #007bff;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  &:hover {
    background: #1a2a44;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    background: #555;
    cursor: not-allowed;
  }
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  background: #1a2a44;
  color: #fff;
  padding: 0.5rem;
  border: 2px solid #007bff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  transition: transform 0.3s ease, border-color 0.3s ease;
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  filter: invert(1);
`;

const AvatarImage = styled(motion.img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #8A2BE2;
  position: absolute;
  top: 20px;
  right: 20px; /* Avatar එක top right corner එකට fix */
`;

const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showAvatar, setShowAvatar] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'vinodjayasooriya@gmail.com',
    };

    emailjs
      .send(
        'service_lr34obm', // Service ID
        'template_mjcvrz9', // Template ID
        templateParams,
        '4Vc2A2b8wxFhG9GEx' // Public Key
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const handleSocialClick = () => {
    setShowAvatar(!showAvatar);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      borderColor: '#8A2BE2',
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 5px 15px rgba(0, 123, 255, 0.3)',
      transition: { duration: 0.3 },
    },
  };

  const socialButtonVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360, // Rotate animation on hover
      borderColor: '#8A2BE2',
      transition: { duration: 0.4 },
    },
  };

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100,
        damping: 15,
        bounce: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      borderColor: '#FF5733',
      transition: { duration: 0.3 },
    },
  };

  const headingText = 'CONTACT'.split(''); // Split "Contact" into individual letters

  return (
    <ContactSection variants={containerVariants} initial="hidden" animate="visible">
      {/* Animated Heading */}
      <motion.h1
        style={{ fontSize: '2em', fontWeight: 'bold', color: '#007bff', textAlign: 'center' }}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <Form onSubmit={sendEmail}>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileFocus={{ borderColor: '#8A2BE2' }}
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileFocus={{ borderColor: '#8A2BE2' }}
        />
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          required
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileFocus={{ borderColor: '#8A2BE2' }}
        />
        <SubmitButton
          type="submit"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </SubmitButton>
      </Form>

      <SocialIcons variants={containerVariants} initial="hidden" animate="visible">
        <SocialLink
          href="https://web.facebook.com/profile.php?id=100004583986814"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialClick}
          variants={socialButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <SocialIcon src="/assets/facebook-icon.png" alt="Facebook" />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/vinodjayasooriya_/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialClick}
          variants={socialButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <SocialIcon src="/assets/instagram-icon.png" alt="Instagram" />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/vinodjayasooriya/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialClick}
          variants={socialButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <SocialIcon src="/assets/linkedin-icon.png" alt="LinkedIn" />
        </SocialLink>
        <SocialLink
          href="https://github.com/vinodjayasooriya"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleSocialClick}
          variants={socialButtonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <SocialIcon src="assets/github-logo.png" alt="GitHub" /> {/* Corrected GitHub icon */}
        </SocialLink>
      </SocialIcons>

     
    </ContactSection>
  );
};

export default Contact;