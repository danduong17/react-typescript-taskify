import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";

// Can declare interface Props similar to other components, but here use type to practice
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    

  const handleDelete = (id: number) => {
    // If todo.id is not same as the received id, it'll be filtered out = not showed
    // Just only show todos.id == received id
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      // Check if the todo.id with the received id is same or not
      // If same, isDone become true; if not just return todo
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form className="todos-single">
      {
        // Check if isDone == true, it'll strike off; if not will show as usual
        todo.isDone ? (
          <s className="todos-single-text">{todo.todo}</s>
        ) : (
          <span className="todos-single-text">{todo.todo}</span>
        )
      }
      <div>
        <span className="icon" onClick={() => handleEdit(todo.id)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
