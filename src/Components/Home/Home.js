import React from 'react';
import './Home.css';
import Me from './me.jpeg';

export default function Home() {
  return (
    <div>
      <main className="home-body">
        <div>
          <h1 className="about">About</h1>
        </div>
        <div className="about-section">
          <div className="photo-container">
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
              let techStack = &#123;<br></br>
              markup: HTML,
              <br></br>
              style: CSS,
              <br></br>
              script: JavaScript,
              <br></br>
              frontEnd: React,
              <br></br>
              backEnd: Express.js,
              <br></br>
              database: SQL
              <br></br>
              &#125;
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
