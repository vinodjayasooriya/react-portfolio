import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
     
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;