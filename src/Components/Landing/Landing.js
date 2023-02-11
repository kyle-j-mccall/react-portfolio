import React, { useRef } from 'react';
import './Landing.css';
import { Parallax } from 'react-parallax';

import background from '../../assets/gorge.jpg';
import { useParallax } from 'react-scroll-parallax';
import arrow from '../../assets/down-arrow.png';
import { Parallax as ParallaxScroll } from 'react-scroll-parallax';

export default function Landing() {
  const target = useRef(null);
  const greeting = useParallax({
    easing: 'easeInCubic',
    rotateY: [0, 180],
  });

  return (
    <Parallax
      className="landing-body"
      strength={600}
      bgImage={background}
      ref={target}
      bgImageStyle={{ height: '138vh', width: '100vw' }}
    >
      <ParallaxScroll speed={-20}>
        <main className="landing-main" ref={greeting.ref}>
          <div className="welcome-container">
            <h1 className="introduction">
              Hello, I&apos;m Kyle McCall. <br></br> I&apos;m a full-stack software developer.
            </h1>
          </div>

          <div className="get-to-know-me">
            <p>Get to know me</p>
            <img className="arrow" src={arrow} />
          </div>
        </main>
      </ParallaxScroll>
    </Parallax>
  );
}
