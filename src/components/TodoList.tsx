import "./TodoList.css";
import React from "react";
import { Todo } from "./../todo.model";

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(({ id, text }) => {
        return (
          <li key={id}>
            <span>{text}</span>
            <button onClick={props.onDeleteTodo.bind(null, id)}>
              DELETE
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
