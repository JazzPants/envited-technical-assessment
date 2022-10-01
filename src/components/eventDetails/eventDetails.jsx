import React from "react";
import "./eventDetails.css";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";

const EventDetails = () => {
  return (
    <>
      <h2>Create an Event - Event Details</h2>
      <Paper
        className="event-details"
        style={{ backgroundColor: "#EDE5FF" }}
      ></Paper>
      <nav>
        <Link to="/">
          <Button id="home-button-hello">Home</Button>
        </Link>
      </nav>
      <nav>
        <Link to="/create">
          <Button id="back-button">Back</Button>
        </Link>
      </nav>
    </>
  );
};

export default EventDetails;
