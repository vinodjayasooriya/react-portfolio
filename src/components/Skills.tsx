import { motion } from 'framer-motion';
import styled from 'styled-components';

// Container for the Skills section
const SkillsSection = styled.section`
  background: linear-gradient(135deg, #2a2a5a, #4a4a8a); // Gradient background එක
  padding: 2rem;
  min-height: 100vh; // Full viewport height
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Grid container for skill cards
const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); // Responsive grid (5 columns max)
  gap: 1rem; // Spacing between cards
  max-width: 1200px; // Max width for the grid
  width: 100%;
`;

// SkillCard styling
const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.1); // Semi-transparent white background
  color: #ffffff; // White text
  padding: 1rem;
  border-radius: 12px; // Rounded corners
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; // Stack icon and text vertically
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
  backdrop-filter: blur(5px); // Glassmorphism effect (optional)

  &:hover {
    transform: scale(1.1); // Scale up on hover
    background: rgba(255, 255, 255, 0.2); // Slightly lighter on hover
  }
`;

// Skills component
const Skills: React.FC = () => {
  interface Skill {
    name: string;
    image: string;
  }

  const skillsWithImages: Skill[] = [
    { name: 'Spring Boot', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/spring.svg' },
    { name: 'React', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/react.svg' },
   
    
    { name: 'Tailwind', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/tailwindcss.svg' },
    { name: 'Redux', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/redux.svg' },
    { name: 'TypeScript', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/typescript.svg' },
    { name: 'JavaScript', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/javascript.svg' },
    { name: 'HTML', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/html5.svg' },
    { name: 'CSS', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/css3.svg' },
    { name: 'Material UI', image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/materialui.svg' },
    
    { name: 'Vite', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/vite.svg' },
   
    { name: 'C++', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/cplusplus.svg' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/java.svg' },
    { name: 'Python', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/python.svg' },
   
    { name: 'Node.js', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/nodedotjs.svg' },
    { name: 'Express.js', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/express.svg' },
   
    { name: 'MySQL', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/mysql.svg' },
    { name: 'MongoDB', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/mongodb.svg' },
    { name: 'PostgreSQL', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/postgresql.svg' },
    { name: 'Firebase', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/firebase.svg' },
    
    
    { name: 'Git', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/git.svg' },
    { name: 'GitHub', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/github.svg' },
    
    { name: 'Postman', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/postman.svg' },
    { name: 'AWS', image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonaws.svg' },
    { name: 'Azure', image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/microsoftazure.svg' },
    
    { name: 'Android Studio', image: 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/androidstudio.svg' },
    
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start from below with opacity 0
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        type: 'spring', // Bounce effect
        stiffness: 80,
        damping: 12,
        staggerChildren: 0.1 // Stagger effect (0.1s delay between each card)
      } 
    },
    hover: { 
      scale: 1.1, 
      rotate: 5, // Slight rotate on hover
      transition: { duration: 0.3 } 
    },
  };

  return (
    <SkillsSection>
      <h2 style={{ color: '#ffffff', marginBottom: '2rem' }}>My Skills</h2>
      <SkillsGrid>
        {skillsWithImages.map((skill) => (
          <SkillCard
            as={motion.div}
            key={skill.name}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={cardVariants}
          >
            {skill.image && (
              <img
                src={skill.image}
                alt={`${skill.name} icon`}
                style={{
                  width: '40px', // Larger icon size
                  height: '40px',
                  marginBottom: '0.5rem',
                  filter: 'invert(1)', // White color for icons
                }}
                onError={(e) => {
                  console.log(`${skill.name} image failed to load`);
                  e.currentTarget.src = 'https://via.placeholder.com/40'; // Fallback image
                }}
              />
            )}
            <span>{skill.name}</span>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;