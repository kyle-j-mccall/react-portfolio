import React from 'react';
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-body">
      <main className="landing-main">
        <div className="welcome-container">
          <h1>
            Hello, I&apos;m Kyle McCall. <br></br> I&apos;m a full-stack software developer.
          </h1>
        </div>

        <div className="button-container">
          <button id="enter-button">View my portfolio</button>
        </div>
      </main>
    </div>
  );
}
