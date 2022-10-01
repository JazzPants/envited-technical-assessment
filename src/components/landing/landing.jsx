import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import LandingPageImage from "../../img/landingPageImage";

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="landing-left-wrapper">
          <div className="landing-left-image">
            <LandingPageImage />
          </div>
        </div>
        <div className="landing-right-wrapper">
          <div className="landing-right-content">
            <h1>Imagine if SnapChat had events.</h1>
            <p>
              Easily host and share events with your friends across any social
              media.
            </p>
            <p>Button</p>
            <nav>
              <Link to="/create">Create my event</Link>
            </nav>
            <nav>
              <Link to="/event">Event Details</Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
