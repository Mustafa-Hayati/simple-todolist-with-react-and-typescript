import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = props => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSumitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInputRef.current!.value;

    props.onAddTodo(enteredText);
    textInputRef.current!.value = "";
  };

  return (
    <form onSubmit={todoSumitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
