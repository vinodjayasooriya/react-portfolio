import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles.css'; // CSS file එක link කරලා තියෙනවා

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link to="/project">Project</Link>
        </li>
        <li className="nav-item">
          <Link to="/education">Education</Link>
        </li>
        <li className="nav-item">
          <Link to="/contack">Contact</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;