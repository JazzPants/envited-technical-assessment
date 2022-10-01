import React from "react";
import "./createEvent.css";
import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

const CreateEvent = () => {
  return (
    <>
      <h1>envited</h1>
      <h2>Create an event!</h2>
      <Paper
        style={{ backgroundColor: "#EDE5FF" }}
        className="createEvent-form"
      >
        <Typography variant="button">Event Name</Typography>
        <TextField>Event Name</TextField>
        <Typography variant="button">Host Name</Typography>
        <TextField>Host Name</TextField>
        <Typography variant="button">Start Date/End Date</Typography>
        <TextField>Start/End Date/Time</TextField>
        <Typography variant="button">Location</Typography>
        <TextField>Location</TextField>
        <Button className="form-button">Upload Event Photo</Button>
      </Paper>
      <nav>
        <Link to="/event">
          {" "}
          <Button id="next-button" className="form-button">
            Next
          </Button>
        </Link>
      </nav>

      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button id="home-button">Home</Button>
        </Link>
      </nav>
    </>
  );
};

export default CreateEvent;
