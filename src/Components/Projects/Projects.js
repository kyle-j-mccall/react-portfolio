import React, { useRef } from 'react';

import DJ from './assets/desk-jockey.png';
import chess from './assets/chess.png';
import goosebump from './assets/goosebump.png';
import todo from './assets/todo.png';
import github from './assets/github2.png';
import netlify from './assets/netlify2.png';
import './Projects.css';
import { Parallax } from 'react-parallax';

import background from './assets/black-leaves.jpg';
import { Parallax as ParallaxScroll, useParallax } from 'react-scroll-parallax';

export default function Projects() {
  const target = useRef(null);
  const projectTitle = useParallax({
    rotateY: [90, 0],
  });

  return (
    <Parallax
      className="projects-main"
      bgImage={background}
      strength={600}
      bgImageStyle={{ height: '200vh', width: '100vw' }}
      ref={target}
    >
      <h1 className="recent-projects" ref={projectTitle.ref}>
        Recent Projects
      </h1>
      <ParallaxScroll speed={-20}>
        <div className="projects-container">
          <div className="dj-container">
            <h2>Desk Jockey</h2>
            <img src={DJ} className="screenshot" />
            <div className="desc">
              <p>
                Desk Jockey is a productivity hub designed to promote focus, eliminate distractions
                and promote wellness for people who work from their desk. Desk Jockey was built in
                React and utilized Supabase data storage and authentication. For this project I was
                the the lead on design and UI.
              </p>
            </div>
          </div>
          <div className="chess-container">
            <h2>Chess</h2>
            <img src={chess} className="screenshot" />
            <div className="desc">
              <p>
                This chess application is a fully functional chess app that includes real time
                functionality, giving the user the ability to play with another user from a
                different machine. All the game logic was written by myself and the three other devs
                in Vanilla JavaScript. For this project I was the the lead on design and UI.
              </p>
            </div>
          </div>
          <div className="goosebump-container">
            <h2>Give Yourself Goosebumps</h2>
            <img src={goosebump} className="screenshot" />
            <div className="desc">
              <p>
                Give yourself goosebumps is a create your own adventure application based off of
                R.L. Stines Goosebumps books. This is a full-stack application that was built in
                React, Express.js, and PostgreSQL.
              </p>
            </div>
          </div>
          <div className="todo-container">
            <h2>what todo, what todo...?</h2>
            <div className="image-container">
              <img src={todo} className="screenshot" />
              <div className="icon-container">
                <div className="overlay">
                  <a>
                    <img src={github} className="icon" />
                  </a>
                  <a>
                    <img src={netlify} className="icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="desc">
              <p>
                This application is a full-stack application that was built in Express.js and React.
                This is your standard todo application that allows users to sign in, and create,
                complete and delete todos.
              </p>
            </div>
          </div>
        </div>
      </ParallaxScroll>
    </Parallax>
  );
}
