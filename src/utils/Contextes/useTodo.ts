import React, { useContext } from "react";
import TodoContext from "./TodoContext";

const useTodo = () => useContext(TodoContext);

export default useTodo;