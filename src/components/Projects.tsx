import React from "react";
import { ParallaxCard, ParallaxCardContainer } from "react-card-parallax";
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled component for the project card content
const ProjectCardContent = styled.div`
  background: #2a2a5a;
  color: #ffffff;
  padding: 5rem;
  border-radius: 4px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  width: 95vw;
  max-width: 800px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

// Styled component for the GitHub link with icon
const GitHubLink = styled.a`
  display: inline-block;
  margin-left: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

// Styled component for the GitHub icon
const GitHubIcon = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

// Styled component for the heading
const ProjectHeading = styled(motion.h2)`
  font-size: 3em;
  font-weight: bold;
  color: #007bff;
  text-align: center;
 
  background: #1a1a2e;
  
`;

// Styled container for full-screen layout
const FullScreenContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
  background: #1a1a2e;
`;

// Styled container for the image wrapper
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  overflow: hidden;
`;

// Styled component for the project image
const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Projects: React.FC = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Learning Management System', 
      desc: 'Student course enrollment and academic management.', 
      tech: 'Java, Hibernate, Java FX, MySQL', 
      image: '/assets/lms.jpg',
      color: '#10B981',
      githubLink: 'https://github.com/vinodjayasooriya/Student_Management_System_Java_Hibernate'
    },
    { 
      id: 2, 
      title: 'Travelheap Hotels Directory', 
      desc: 'Hotel directory with search and route options.', 
      tech: 'Laravel, MySQL, Html, Css', 
      image: '/assets/travelheap.png',
      color: '#33A1FF',
      githubLink: 'https://github.com/vinodjayasooriya/Travelheap_Hotels_Directory'
    },
    { 
      id: 3, 
      title: 'Lakderana_Backend', 
      desc: 'Backend for Lakderana from clients.', 
      tech: 'Spring Boot, MySQL', 
      color: '#FFC300',
      githubLink: 'https://github.com/vinodjayasooriya/Lakderana_Backend'
    },
    { 
      id: 4, 
      title: 'VirtualTempleDashboard', 
      desc: 'Hotel management system with booking and pool features.', 
      tech: 'JavaScript', 
      color: '#808000',
      githubLink: 'https://github.com/vinodjayasooriya/VirtualTempleDashboard'
    },
    { 
      id: 5, 
      title: 'Springboot-with-Swagger-', 
      desc: 'Hotel management system with booking and pool features.', 
      tech: 'Spring Boot, MySQL', 
      color: '#CCCCFF',
      githubLink: 'https://github.com/vinodjayasooriya/Springboot-with-Swagger-'
    },
    { 
      id: 6, 
      title: 'suwasetha', 
      desc: 'This Project done for my academics.', 
      tech: 'Java', 
      color: '#61CFCF',
      githubLink: 'https://github.com/vinodjayasooriya/suwasetha'
    },
    { 
      id: 7, 
      title: 'Detecting Freshness of Fish Fillet', 
      desc: 'Research project to identify the freshness of fish fillets.', 
      tech: 'Machine Learning, TensorFlow, Flutter', 
      image: '/assets/freshness.png',
      color: '#FF5733',
    },
    { 
      id: 8, 
      title: 'ExpensesTracker', 
      desc: 'Expenses Tracker React App.', 
      tech: 'JavaScript, React', 
      image: '/assets/tracker.png',
      color: '#6B7280',
      githubLink: 'https://github.com/vinodjayasooriya/ExpensesTracker'
    },
    { 
      id: 9, 
      title: 'Non-Academic Management System', 
      desc: 'System to manage non-academic staff at the University of Ruhuna.', 
      tech: 'Laravel', 
      color: '#DE3163',
    },
    { 
      id: 10, 
      title: 'Hotel Management System', 
      desc: 'Hotel management system with booking and pool features.', 
      tech: 'Spring Boot, MySQL', 
      color: '#6B7280',
    },
  ];

  // Animation variants for the heading
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

  const headingText = 'My Projects'.split('');

  return (
    <section>
      {/* Animated Heading */}
      <ProjectHeading
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        {headingText.map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </ProjectHeading>

      <FullScreenContainer>
        <ParallaxCardContainer
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {projects.map((project) => (
            <ParallaxCard
              key={project.id}
              color={project.color}
              rangeMultiplier={0.3}
              scaleMultiplier={0.02}
              style={{
                width: '95vw',
                maxWidth: '1200px',
                height: '500px',
              }}
            >
              <ProjectCardContent>
                <div>
                  <h3 style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>{project.title}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
                    {project.image && (
                      <ImageWrapper>
                        <ProjectImage
                          src={project.image}
                          alt={project.title}
                        />
                      </ImageWrapper>
                    )}
                    <p style={{ fontSize: '1.5rem', margin: '0' }}>
                      {project.desc}{' '}
                      {project.githubLink && (
                        <GitHubLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <GitHubIcon
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub"
                          />
                        </GitHubLink>
                      )}
                    </p>
                  </div>
                  <p style={{ fontSize: '1.3rem', marginTop: '1.2rem' }}>Tech: {project.tech}</p>
                </div>
              </ProjectCardContent>
            </ParallaxCard>
          ))}
        </ParallaxCardContainer>
      </FullScreenContainer>
    </section>
  );
};

export default Projects;