import React from "react";
import { Task } from "@/types";
import Todo from "./Todo";

interface TodoListProps {
  todos: Task[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
