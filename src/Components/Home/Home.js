import React, { useRef } from 'react';
import './Home.css';
import Me from './assets/me.jpeg';
import html from './assets/html-icon.png';
import js from './assets/js-icon.png';
import css from './assets/css-icon.png';
import exp from './assets/exp-icon.png';
import react from './assets/react-icon.png';
import sql from './assets/sql-icon.png';
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { Parallax as ParallaxScroll } from 'react-scroll-parallax';
import background from '../../assets/skyscraper.jpg';

export default function Home() {
  const target = useRef(null);
  const about = useParallax({
    rotateX: [90, 0],
  });

  return (
    <Parallax
      className="home-body"
      bgImage={background}
      strength={200}
      bgImageStyle={{ height: '120vh' }}
      ref={target}
    >
      <div>
        <h1 className="about" ref={about.ref}>
          About
        </h1>
      </div>
      <div className="about-section">
        <ParallaxScroll className="me-container" speed={-10}>
          <img className="headshot" src={Me}></img>
          <div className="bio-container">
            <p className="bio">
              I&apos;m a Full-stack software developer with a background in music production, audio
              engineering and hospitality. I come equipped with a keen eye for design, a passion for
              logic and problem solving, and a strong attraction to intellectual pursuits. I enjoy
              working with others or alone and cherishes the flow state in any stimulating task. .
            </p>
          </div>
        </ParallaxScroll>

        <ParallaxScroll className="tech-stack" speed={-10}>
          <div className="stack-header">Tech Stack</div>

          <br></br>
          <div className="html">
            <p>HTML</p> <img src={html}></img>
          </div>
          <div className="css">
            <p>CSS</p> <img src={css}></img>
          </div>
          <div className="js">
            <p>JavaScript</p> <img src={js}></img>
          </div>
          <div className="react">
            <p>React</p> <img src={react}></img>
          </div>
          <div className="exp">
            <p>Express.js</p> <img src={exp}></img>
          </div>
          <div className="sql">
            <p>PostgreSQL</p> <img src={sql}></img>
          </div>
        </ParallaxScroll>
      </div>
    </Parallax>
  );
}
