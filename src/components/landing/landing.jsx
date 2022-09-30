import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Hello there. Welcome to envited.</h1>
      <nav>
        <Link to="/create">Create an event</Link>
      </nav>
      <nav>
        <Link to="/event">Event Details</Link>
      </nav>
    </div>
  );
};

export default Landing;
