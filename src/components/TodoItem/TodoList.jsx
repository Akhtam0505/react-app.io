import React from "react";
import Button from "../Button/Button";
import "./todolist.css";

const TodoList = (props, handleRemove, todoList) => {
  return (
    <li>
      <p>
        {props.order}.{props.children}
      </p>
      
    </li>
  );
};

export default TodoList;
