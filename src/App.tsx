import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects'; // Temporarily map to Features
import Skills from './pages/Skills';     // Temporarily map to Pricing
import Education from './pages/Education'; // Temporarily map to About
import Contact from './components/Contact';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import { ActionProvider } from './ActionProvider';

// Global styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    .chatbot-container {
      bottom: 10px !important;
      right: 10px !important;
      width: 300px !important;
    }
  }
`;

// Theme interfaces
interface Theme {
  background: string;
  text: string;
  buttonBg: string;
  buttonText: string;
}

const lightTheme: Theme = {
  background: 'linear-gradient(135deg, #f0f0f0, #d9e6ff)',
  text: '#333',
  buttonBg: '#007bff',
  buttonText: '#fff',
};

const darkTheme: Theme = {
  background: 'linear-gradient(135deg, #1a1a1a, #2a2a5a)',
  text: '#fff',
  buttonBg: '#4a90e2',
  buttonText: '#fff',
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(darkTheme);
  const [isChatbotVisible, setIsChatbotVisible] = useState<boolean>(false);

  const toggleTheme = () => {
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  };

  const toggleChatbot = () => {
    setIsChatbotVisible(prev => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <Navbar /> {/* Render the Navbar once for all pages */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Projects />} /> {/* Adjust or create Features.tsx */}
            <Route path="/skills" element={<Skills />} />     {/* Adjust or create Pricing.tsx */}
            <Route path="/education" element={<Education />} />   {/* Education for About */}
            <Route path="/contack" element={<Contact />} />   {/* Separate Contact route */}
            <Route path="/" element={<Home />} />
          </Routes>

          {/* Chatbot Toggle Button */}
          <motion.button
            onClick={toggleChatbot}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: theme.buttonBg,
              color: theme.buttonText,
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              zIndex: 1000,
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isChatbotVisible ? '✕' : '💬'}
          </motion.button>

          {/* Chatbot with Animation */}
          <AnimatePresence>
            {isChatbotVisible && (
              <motion.div
                className="chatbot-container"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
                style={{
                  position: 'fixed',
                  bottom: '80px',
                  right: '20px',
                  zIndex: 999,
                }}
              >
                <Chatbot
                  config={config}
                  messageParser={MessageParser}
                  actionProvider={ActionProvider}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;