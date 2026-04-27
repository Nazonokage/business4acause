import { Link } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export default function GetStartedPage() {
  return (
    <section id="get-started" className="get-started">
      <div className="get-started__header">
        <Link to="/" className="get-started__back">
          ← Back to Home
        </Link>
        <h1>Get Started</h1>
        <p>Your questions, answered. Everything you need to hit the ground running.</p>
      </div>

      <div className="get-started__grid">
        <div className="get-started__card">
          <img src={viteLogo} alt="Vite logo" className="get-started__logo" />
          <h2>Explore Vite</h2>
          <p>Next Generation Frontend Tooling. Get ready for a development environment that can finally keep up with you.</p>
          <a href="https://vite.dev/" target="_blank" rel="noreferrer" className="welcome-btn welcome-btn--primary">
            Vite Docs
          </a>
        </div>

        <div className="get-started__card">
          <img src={reactLogo} alt="React logo" className="get-started__logo" />
          <h2>Learn React</h2>
          <p>The library for web and native user interfaces. Build user interfaces out of individual pieces called components.</p>
          <a href="https://react.dev/" target="_blank" rel="noreferrer" className="welcome-btn welcome-btn--primary">
            React Docs
          </a>
        </div>
      </div>
    </section>
  );
}

