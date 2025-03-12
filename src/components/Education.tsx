import React from 'react';
import { motion } from 'framer-motion';
import fossNsbm from '../assets/images.jpg'; // Relative import
import csslNsbm from '../assets/ijse.png';   // Relative import

interface EducationProps {
  showAnimation?: boolean;
}

const Education: React.FC<EducationProps> = ({ showAnimation = true }) => {
  const educationDetails = [
    {
      title: 'Bachelor of Information and Communication Technology (Honours)',
      institution: 'University of Ruhuna Sri Lanka',
      duration: '2019 - 2020',
      image: fossNsbm,
    },
    {
      title: 'Comprehensive Master Java Developer – Professional',
      institution: 'Institute of Software Engineering (IJSE), Panadura',
      duration: 'June 2024 - Present',
      image: csslNsbm,
    },
  ];

  // Animation variants and styles remain unchanged
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

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    position: 'relative',
  };

  const headingStyles: React.CSSProperties = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: '40px',
  };

  const timelineStyles: React.CSSProperties = {
    position: 'absolute',
    left: '30px',
    top: '80px',
    width: '4px',
    backgroundColor: '#007bff',
    zIndex: 1,
  };

  const itemStyles: React.CSSProperties = {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#1a2a44',
    border: '2px solid #007bff',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    color: '#fff',
  };

  const circleStyles: React.CSSProperties = {
    width: '20px',
    height: '20px',
    backgroundColor: '#007bff',
    borderRadius: '50%',
    position: 'absolute',
    left: '-37px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    border: '3px solid #fff',
  };

  const imageStyles: React.CSSProperties = {
    width: '50px',
    height: '50px',
    marginRight: '15px',
    borderRadius: '5px',
    objectFit: 'contain',
    backgroundColor: '#fff',
    padding: '5px',
  };

  const textContainerStyles: React.CSSProperties = {
    flex: 1,
  };

  const titleStyles: React.CSSProperties = {
    margin: '0 0 5px 0',
    fontSize: '1.2em',
    fontWeight: 'bold',
  };

  const institutionStyles: React.CSSProperties = {
    margin: '0 0 5px 0',
    fontSize: '1em',
    opacity: 0.9,
  };

  const durationStyles: React.CSSProperties = {
    margin: '0',
    fontSize: '0.9em',
    opacity: 0.7,
  };

  const headingText = 'EDUCATION'.split(''); // Split heading into individual letters

  return (
    <div style={containerStyles}>
      <motion.h1
        style={headingStyles}
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

      <motion.div
        style={{ ...timelineStyles, height: `calc(100% - 80px)` }}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />

      {educationDetails.map((edu, index) => (
        <motion.div
          key={index}
          initial={showAnimation ? 'hidden' : 'visible'}
          animate={showAnimation ? 'visible' : 'visible'}
          variants={itemVariants}
          transition={{ delay: index * 0.3 + 0.5 }}
          whileHover={{
            scale: 1.03,
            boxShadow: '0 6px 15px rgba(0, 123, 255, 0.3)',
            transition: { duration: 0.3 },
          }}
          style={itemStyles}
        >
          <div style={circleStyles} />
          {edu.image && <img src={edu.image} alt={edu.institution} style={imageStyles} />}
          <div style={textContainerStyles}>
            <h3 style={titleStyles}>{edu.title}</h3>
            <p style={institutionStyles}>{edu.institution}</p>
            <p style={durationStyles}>{edu.duration}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;