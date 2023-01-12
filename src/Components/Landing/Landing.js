import React from 'react';
import './Landing.css';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import { Link } from 'react-router-dom';

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
          <Link>
            <p id="enter-button">
              View my portfolio{' '}
              <Stack className="finger" direction="row" spacing={1}>
                <IconButton height="2vh" aria-label="fingerprint" color="#fafafa">
                  <Fingerprint />
                </IconButton>
              </Stack>
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
