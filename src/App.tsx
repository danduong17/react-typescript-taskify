import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

// As App is a functional component so declare App as type called FC of React
const App: React.FC = () => {
  // Because of using TypeScript, everything in TypeScript must have a type, even a state.
  // So I would give this state a type string because the task when inputting is just a string
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  // After creating a few to-do tasks, there'll be a new state
  // Because it's gonna an array of to-do tasks so we provide Todo type that has been declared as interface before

  // This function adds to-do tasks to the 2nd state above
  // It'll take event from on submit so when we submit form, it should add inside this func
  // For type of Event, there're some other types that will work well too when searching on Google, but this is the best
  // After providing event type, need to put it into interface Props too
  const handleAdd = (e: React.FormEvent) => {
    // Prevent reloading page whenever press button Go
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
      // After creating to-do, we should empty the input field
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* Render all todo after being created */}
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))};
    </div>
  );
};

export default App;
