import { motion } from 'framer-motion';
import styled from 'styled-components';

// Styled Components
const HeroSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #4b0082 100%); /* Gradient background */
  color: #fff;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const ProfileImg = styled(motion.img)`
  width: 180px; /* ටිකක් විශාල කළා */
  height: 180px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  border: 4px solid #8A2BE2;
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.6); /* Shadow එකක් දැම්මා */
`;

const Heading = styled(motion.h1)`
  font-size: 3rem; /* ටිකක් විශාල කළා */
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 10px rgba(138, 43, 226, 0.5); /* Text shadow එකක් */
  transition: color 0.3s ease;
  &:hover {
    color: #8A2BE2;
  }
`;

const SubHeading = styled(motion.p)`
  font-size: 1.5rem; /* ටිකක් විශාල කළා */
  color: #ddd;
  letter-spacing: 1px; /* අකුරු අතර ඉඩ එකතු කළා */
`;

const Hero: React.FC = () => {
  // Container Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.4, // ලස්සනට එකින් එක පෙන්නන්න
      },
    },
  };

  // Profile Image Variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -360 }, // වඩා ලස්සන රවුමක්
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2, // ටිකක් වැඩි කළා
        type: 'spring',
        stiffness: 120,
        damping: 12,
      },
    },
    hover: {
      scale: 1.15, // ටිකක් වැඩිපුර විශාල වෙන්න
      boxShadow: '0 0 30px rgba(138, 43, 226, 0.8)', // Hover වලදි shadow එක වැඩි වෙනවා
      transition: { duration: 0.4 },
    },
  };

  // Heading Variants
  const headingVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90 }, // 3D එෆෙක්ට් එකක්
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      color: '#8A2BE2',
      transition: { duration: 0.3 },
    },
  };

  // Subheading Variants
  const subHeadingVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.1,
      color: '#fff',
      textShadow: '0 0 15px rgba(255, 255, 255, 0.8)', // Hover වලදි glow එකක්
      transition: { duration: 0.3 },
    },
  };

  return (

    
    <HeroSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >




      <div>
        <ProfileImg
          src="/profile.jpg"
          variants={imageVariants}
          whileHover="hover"
        />
        <Heading
          variants={headingVariants}
          whileHover="hover"
        >
          Hi, I'm Vinod Jayasooriya
        </Heading>
        <SubHeading
          variants={subHeadingVariants}
          whileHover="hover"
        >
          Full Stack Software Engineer
        </SubHeading>
      </div>
    </HeroSection>
  );
};

export default Hero;