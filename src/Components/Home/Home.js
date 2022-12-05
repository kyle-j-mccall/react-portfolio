import React from 'react';
import './Home.css';
import Me from './me.jpeg';
import html from './html-icon.png';
import js from './js-icon.png';
import css from './css-icon.png';
import exp from './exp-icon.png';
import react from './react-icon.png';
import sql from './sql-icon.png';

export default function Home() {
  return (
    <div>
      <main className="home-body">
        <div>
          <h1 className="about">About</h1>
        </div>
        <div className="about-section">
          <div className="me-container">
            <img className="headshot" src={Me}></img>
            <div className="bio-container">
              <p className="bio">
                Full-stack software developer with a background in music production and hospitality.
                Keen eye for design and layout, a passion for logic and problem solving and a strong
                attraction to challenging tasks and intellectual pursuits. Enjoys working with
                others or alone and cherishes the flow state in any stimulating task.
              </p>
            </div>
          </div>
          <div className="tech-stack">
            <p>
              Tech Stack
              <br></br>
              <div className="html">
                HTML <img src={html}></img>
              </div>
              <div className="css">
                CSS <img src={css}></img>
              </div>
              <div className="js">
                JavaScript <img src={js}></img>
              </div>
              <div className="react">
                React <img src={react}></img>
              </div>
              <div className="exp">
                Express.js <img src={exp}></img>
              </div>
              <div>
                SQL <img src={sql}></img>
              </div>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
