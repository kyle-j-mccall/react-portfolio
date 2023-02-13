import React from 'react';
import { Parallax } from 'react-parallax';
import background from './assets/black-shrub.jpg';
import email from './assets/email.png';
import phone from './assets/phone.png';
import gh from './assets/github2.png';
import li from './assets/li.png';

import './Contact.css';

export default function Contact({ contact }) {
  return (
    <div ref={contact}>
      <Parallax
        className="contact-body"
        bgImage={background}
        strength={300}
        bgImageStyle={{ height: '100%', width: '100vw' }}
      >
        <div className="contact-main">
          <div>
            <h2 className="talk">TALK TO ME</h2>
          </div>
          <div className="links-container">
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/kyle-mccall/" target="blank">
                <img src={li} className="contact-icon" />
                <p>Linkedin</p>
              </a>
            </div>
            <div className="github">
              <a href="https://github.com/kyle-j-mccall" target="blank">
                <img src={gh} className="contact-icon" />
                <p>Github</p>
              </a>
            </div>
            <div className="email">
              <a href="mailto:kylem147@gmail.com" target="blank">
                <img src={email} className="contact-icon" />
                <p>Email</p>
              </a>
            </div>
            <div className="phone">
              <img src={phone} className="contact-icon" />
              <p>(541)-993-6372</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
