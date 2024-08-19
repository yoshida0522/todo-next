"use client";

import { Task } from "@/types";
import Link from "next/link";
import React from "react";

interface TodoProps {
  todo: Task;
}

const List = ({ todo }: TodoProps) => {
  const handleClick = () => {
    const selectVlalue = todo.text;
    console.log(selectVlalue);
  };

  return (
    <li
      key={todo.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      <span onClick={handleClick}>
        <Link href="edit">{todo.text}</Link>
      </span>
    </li>
  );
};

export default List;
