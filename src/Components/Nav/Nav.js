import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './port-icon.ico';
import './Nav.css';

export default function Nav({ home, about, projects, contact }) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div>
          <img src={Icon} className="kahji"></img>
        </div>
        <div className="nav-links">
          <Link
            onClick={() => scrollToTop(home)}
            style={{ textDecoration: 'none', color: 'white' }}
            className="nav-link"
          >
            <p>Home</p>
          </Link>
          <Link
            onClick={() => scrollToSection(about)}
            style={{ textDecoration: 'none', color: 'white' }}
            className="nav-link"
          >
            <p>About</p>
          </Link>
          <Link
            onClick={() => scrollToSection(projects)}
            style={{ textDecoration: 'none', color: 'white' }}
            className="nav-link"
          >
            <p>Projects</p>
          </Link>
          <Link
            onClick={() => scrollToSection(contact)}
            style={{ textDecoration: 'none', color: 'white' }}
            className="nav-link"
          >
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
