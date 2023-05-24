import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

// If do not declare types of todos & setTodos in this Props, it'll have bug for these 2 below in ()
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {/* Render all todo after being created */}
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
