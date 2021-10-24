import React, { useState, useEffect } from "react";

// Import the Home page component
//import Home from "./pages/home.jsx";

// Import and apply CSS stylesheet
import "./styles/styles.css";

function ChoreForm({ addChoreLog }) {
  const [choreDesc, setChoreDesc] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addChoreLog([choreDesc, name, date]);
  };

  return (
    <form
      onSubmit={e => {
        handleSubmit(e);
      }}
    >
      <label>Chore Description</label>
      <br />
      <input
        name="choreDesc"
        type="text"
        onChange={e => setChoreDesc(e.target.value)}
        value={choreDesc}
      />
      <br />
      <label>Name</label>
      <br />
      <input
        name="userName"
        type="text"
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <br />
      <label>Date</label>
      <br />
      <input
        name="dayt"
        type="date"
        onChange={e => setDate(e.target.value)}
        value={date}
      />
      <br />
      <input className="submitButton" type="submit" value="Log Chore" />
    </form>
  );
}

export default ChoreForm;
