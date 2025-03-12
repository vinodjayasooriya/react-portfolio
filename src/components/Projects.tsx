import React from "react";
import { ParallaxCard, ParallaxCardContainer } from "react-card-parallax";
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled component for the project card content
const ProjectCardContent = styled.div`
  background: #2a2a5a;
  color: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  width: 800px; /* Fixed width for consistency */
  height: 350px; /* Fixed height for consistency */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Styled component for the heading (same as Contact)
const ProjectHeading = styled(motion.h2)`
  font-size: 2em;
  font-weight: bold;
  color: #007bff; /* Blue color from Contact */
  text-align: center;
`;

const Projects: React.FC = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Detecting Freshness of Fish Fillet', 
      desc: 'Research project to identify the freshness of fish fillets.', 
      tech: 'Machine Learning, TensorFlow, Flutter', 
      image: '/assets/freshness.png',
      color: '#FF5733'
    },
    { 
      id: 2, 
      title: 'Learning Management System', 
      desc: 'Student course enrollment and academic management.', 
      tech: 'Java, Hibernate, Java FX, MySQL', 
      image: '/assets/lms.jpg',
      color: '#10B981'
    },
    { 
      id: 3, 
      title: 'Travelheap Hotels Directory', 
      desc: 'Hotel directory with search and route options.', 
      tech: 'Laravel, MySQL', 
      image: 'https://via.placeholder.com/150',
      color: '#33A1FF'
    },
    { 
      id: 4, 
      title: 'Lakderana_Backend', 
      desc: 'Backend for Lakderana from clients.', 
      tech: 'Spring Boot, MySQL', 
      image: 'https://via.placeholder.com/150',
      color: '#FFC300'
    },
    { 
      id: 5, 
      title: 'Non-Academic Management System', 
      desc: 'System to manage non-academic staff at the University of Ruhuna.', 
      tech: 'Laravel', 
      image: 'https://via.placeholder.com/150',
      color: '#FF6F61'
    },
  
  ];

  // Animation variants for the heading (same as Contact)
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Delay between each letter (same as Contact)
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3, // Same as Contact
      },
    },
  };

  const headingText = 'My Projects'.split(''); // Split "My Projects" into individual letters

  return (
    <section>
      {/* Animated Heading (same style as Contact) */}
      <ProjectHeading
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === ' ' ? '\u00A0' : letter} {/* Handle space character */}
          </motion.span>
        ))}
      </ProjectHeading>

      <ParallaxCardContainer 
        style={{ 
          minHeight: "100vh",
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '2rem 0',
          gap: '1.5rem'
        }}
      >
        {projects.map((project) => (
          <ParallaxCard
            key={project.id}
            color={project.color}
            rangeMultiplier={0.3}
            scaleMultiplier={0.07}
            style={{
              width: '800px', // Fixed width matching ProjectCardContent
              height: '350px', // Fixed height matching ProjectCardContent
            }}
          >
            <ProjectCardContent>
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100px', height: '100px', borderRadius: '8px' }} 
                  />
                  <p style={{ fontSize: '1.2rem', margin: '0' }}>{project.desc}</p>
                </div>
                <p style={{ fontSize: '1.1rem', marginTop: '1rem' }}>Tech: {project.tech}</p>
              </div>
            </ProjectCardContent>
          </ParallaxCard>
        ))}
      </ParallaxCardContainer>
    </section>
  );
};

export default Projects;