import React from 'react';
import DJ from './assets/desk-jockey.png';
import chess from './assets/chess.png';
import './Projects.css';

export default function Projects() {
  return (
    <div className="projects-main">
      <h1>Recent Projects</h1>
      <div className="projects-container">
        <div className="dj-container">
          <img src={DJ} className="dj-img" />
          <p className="about-dj">
            Desk Jockey is a productivity hub designed to promote focus, eliminate distractions and
            promote wellness for people who work from their desk. Desk Jockey has three main
            components. Mind, Body and the productivity bar. The Mind component includes a
            break/meditation section and a journal section. The Body component utilizes a stetches
            api to look up different stretches. Finally the productivity bar includes a to-do
            component and a pomodoro timer. This application was created using React.js and CSS.
          </p>
        </div>
        <div className="about-chess">
          <img src={chess} className="chess-img" />
          <p>
            This chess application is a fully functional chess app that includes real time
            functionality, giving the user the ability to play with another user from a different
            machine. All the game logic was written by myself and the three other devs that made
            this app. Chess also includes the ability to save and resume your previous games. This
            application was built in HTML, CSS and vanilla JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}
