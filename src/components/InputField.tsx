import React from "react";
import "./styles.css";

/* Although has already added todo & setTodo to this component, still some have errors because:
todo implicitly has an 'any' type. Solution: add interface to declare types for todo & setTodo */
interface Props {
  todo: string;
  // setTodo is a function, so to know what type of setTodo is go back to App.tsx & hover setTodo, it'll point out
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; // return nothing
}

// There's another way to define Props bc this is a functional component:
// const InputField:React.FC<Props> = ...
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={(e)=>handleAdd(e)}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input-box"
      />
      <button className="input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
