import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./todo.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    if (todo.length <= 2) {
      setError("input 2ta harfdan katta bo`lishi kerak");
      return;
    }
    const isExist = todos.some((t) => t === todo);
    if (isExist) {
      setError("bu task mavjud");
      return;
    }

    setTodos([...todos, todo]);
    setTodo("");
    setError("");
  };

  const handleRemove = (str) => {
    const updatedTodos = todos.filter((t) => t !== str);
    setTodos(updatedTodos);
  };

  return (
    <div className="releative_container">
      <div className="none">
        <div className="input">
          <input
            type={"text"}
            placeholder="Enter text"
            onChange={handleChange}
            value={todo}
          ></input>
          <Button onClick={handleSubmit}>add task</Button>

          <p className="error"> {error}</p>
        </div>
        <div className="list">
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  {" "}
                  {index + 1}.{todo}
                  <Button onClick={() => handleRemove(todo)}>remove</Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
