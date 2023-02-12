import React from 'react';
import { Parallax } from 'react-parallax';
import background from './assets/black-shrub.jpg';
import email from './assets/email.png';
import phone from './assets/phone.png';
import gh from './assets/github2.png';
import li from './assets/li.png';

import './Contact.css';

export default function Contact() {
  return (
    <Parallax
      className="contact-body"
      bgImage={background}
      strength={600}
      blur={2}
      bgImageStyle={{ height: '100vh', width: '100vw' }}
    >
      <div className="contact-main">
        <div className="links-container">
          <div className="linkedin">
            <img src={li} className="contact-icon" />
            <p>Linkedin</p>
          </div>
          <div className="github">
            <img src={gh} className="contact-icon" />
            <p>Github</p>
          </div>
          <div className="email">
            <img src={email} className="contact-icon" />
            <p>Email</p>
          </div>
          <div className="phone">
            <img src={phone} className="contact-icon" />
            <p>Phone</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
