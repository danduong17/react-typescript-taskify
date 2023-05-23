import React, { useRef } from "react";
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
  // Create a use ref: when we use document.getElementByClassname/ ...ByID, we're hooking that particular component HTML
  const inputRef = useRef<HTMLInputElement>(null);
  
  // inputRef & inputRef.current?.blur is for when pressing Go btn, it'll remove effect focus
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
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
