import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

// As App is a functional component so declare App as type called FC of React
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  /* Because of using TypeScript, everything in TypeScript must have a type, even a state.
  So I would give this state a type string because the task when inputting is just a string */

  // console.log(todo); 

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
