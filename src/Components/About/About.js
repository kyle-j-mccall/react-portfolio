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
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { Parallax as ParallaxScroll } from 'react-scroll-parallax';
import background from '../../assets/trip.jpg';

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
        blur={2}
        strength={200}
        bgImageStyle={{ height: '150vh' }}
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
                As a software engineer, I am passionate about finding innovative solutions to
                complex technical problems. My experience working on various projects has allowed me
                to develop a keen sense of design and user experience, which I believe are essential
                components of any peace of software. I am well-versed in JavaScript and JavaScript
                frameworks such as React, Node, and Redux, and have a proven track record of high
                quality code. I thrive in collaborative environments and am committed to continuous
                learning and growth. I look forward to contributing my skills and expertise to any
                project I am a part of.
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
            <div className="react">
              <p>Redux</p> <img src={redux}></img>
            </div>
            <div className="html">
              <p>HTML</p> <img src={html}></img>
            </div>
            <div className="css">
              <p>CSS</p> <img src={css}></img>
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
    </div>
  );
}
