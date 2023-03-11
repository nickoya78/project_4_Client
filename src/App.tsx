import React from "react";
import InputTask from "./components/inputtask";
// import EditTask from "./components/edittask";
import ListTask from "./components/listtask";

function App() {
  return (
    <div className="body">
      <InputTask />
      <ListTask />
    </div>
  );
}

export default App;
