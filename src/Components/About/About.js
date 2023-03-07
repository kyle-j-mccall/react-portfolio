import React, { useRef } from 'react';
import './About.css';
import Me from './assets/me.jpeg';
import html from './assets/html-icon.png';
import js from './assets/js-icon.png';
import css from './assets/css-icon.png';
import exp from './assets/exp-icon.png';
import react from './assets/react-icon.png';
import sql from './assets/sql-icon.png';
import redux from './assets/redux.png';
import python from './assets/python-icon.png';
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { Parallax as ParallaxScroll } from 'react-scroll-parallax';
import background from '../../assets/shadow.jpg';

export default function About({ about }) {
  const target = useRef(null);
  const aboutParallax = useParallax({
    rotateX: [90, 0],
  });

  return (
    <div ref={about}>
      <Parallax
        className="home-body"
        bgImage={background}
        strength={200}
        bgImageStyle={{ height: '100%', backgroundPosition: 'left', width: '100%' }}
        ref={target}
      >
        <div>
          <h1 className="about" ref={aboutParallax.ref}>
            Who am I?
          </h1>
        </div>
        <div className="about-section">
          <ParallaxScroll className="me-container" speed={-10}>
            <img className="headshot" src={Me}></img>
            <div className="bio-container">
              <p className="bio">
                My name is Kyle McCall and I am a full-stack software engineer. I have a keen eye
                for design and user experience, and I love crafting professional grade code to solve
                complex challenges. I am an effective communicator, team player, and have a drive to
                produce only the best. I&apos;ve built various software applications from the ground
                up and hold a Certificate in Professional Full-stack Development, obtained from
                Alchemy Code Lab. When I&apos;m not coding, I enjoy music production, audio
                engineering and focusing on detail oriented tasks. I&apos;m currently open to new
                software engineering opportunities, and I look forward to contributing my skills and
                expertise to my future projects.
              </p>
            </div>
          </ParallaxScroll>

          <ParallaxScroll className="tech-stack" speed={-10}>
            <div className="stack-header">Tech Stack</div>

            <br></br>
            <div className="js">
              <p>JavaScript</p> <img src={js}></img>
            </div>
            <div className="react">
              <p>React</p> <img src={react}></img>
            </div>
            <div className="redux">
              <p>Redux</p> <img src={redux}></img>
            </div>
            <div className="exp">
              <p>Express.js</p> <img src={exp}></img>
            </div>

            <div className="html">
              <p>HTML</p> <img src={html}></img>
            </div>
            <div className="css">
              <p>CSS</p> <img src={css}></img>
            </div>

            <div className="python">
              <p>Python</p> <img src={python}></img>
            </div>
            <div className="sql">
              <p>PostgreSQL</p> <img src={sql}></img>
            </div>
          </ParallaxScroll>
        </div>
      </Parallax>
    </div>
  );
}
