import React from "react";
import { Task } from "@/types";
import List from "./List";

interface TodoListProps {
  todos: Task[];
}

const ListData = ({ todos }: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <List key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default ListData;
