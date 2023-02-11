import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './port-icon.ico';
import './Nav.css';
import { useParallax } from 'react-scroll-parallax';

export default function Nav() {
  const target = useRef(null);
  const nav = useParallax({
    rotateX: [90, 0],
  });

  return (
    <div ref={target}>
      <nav className="navbar" ref={nav.ref}>
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
