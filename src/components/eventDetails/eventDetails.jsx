import React from "react";
import "./eventDetails.css";
import { Link } from "react-router-dom";

const EventDetails = () => {
  return (
    <>
      <h2>I'm eventDetails</h2>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default EventDetails;
