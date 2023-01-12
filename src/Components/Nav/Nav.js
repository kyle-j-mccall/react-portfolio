import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './port-icon.ico';
import './Nav.css';

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <div className="icon">
          <img src={Icon}></img>
        </div>
        <div className="nav-links">
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <p>Home</p>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <p>About</p>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <p>Projects</p>
          </Link>
          <Link style={{ textDecoration: 'none', color: 'white' }}>
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
