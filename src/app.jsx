import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import ChoreChart from './ChoreChart';
import ChoreForm from "./ChoreForm";

function App(props) {
  const [choreLogs, setChoreLogs] = useState([]);
  const addChoreLog = log => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  };
  return (
    <section>
      <ChoreForm addChoreLog={addChoreLog} />
      <br/>
      <ChoreChart chores={choreLogs}/>
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;

