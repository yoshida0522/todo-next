"use client";

import { deleteTodo, editTodo, getTodo as oneTodo } from "@/api";
import { Task } from "@/types";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface TodoProps {
  todo: Task;
}

const Todo = ({ todo }: TodoProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [fetchedTodo, setFetchedTodo] = useState<Task | null>(null);
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskTitle, setEditedTaskTitle] = useState(todo?.text);
  const router = useRouter();

  useEffect(() => {
    if (isEditing) {
      ref.current?.focus();
    }
  }, [isEditing]);

  useEffect(() => {
    const fetchTodo = async () => {
      const fetched = await oneTodo(params.id as string);
      console.log("APIから取得されたデータ:", fetched);
      setFetchedTodo(fetched);
    };
    fetchTodo();
  }, [params.id]);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await editTodo(fetchedTodo!.id, editedTaskTitle);
    setIsEditing(false);
    router.refresh();
    router.push("/");
  };

  const handleDelete = async () => {
    // console.log(`削除するタスクのID: ${fetchedTodo.id}`);
    await deleteTodo(fetchedTodo!.id);
    router.push("/");
  };

  // console.log(deleteTodo);

  return (
    <div className="w-full max-w-xl mt-5">
      <div className="w-full px-8 py-6 bg-white border-blue-500 shadow-md rounded-lg">
        <h1>
          <Link href="/">トップページに戻る</Link>
        </h1>
        <h1 className="text-2xl mb-5">{fetchedTodo?.text}</h1>
        {/* <p className="text-2xl mb-5">{params.id}</p> */}
        {isEditing ? (
          <>
            <input
              ref={ref}
              type="text"
              className="py-1 px-2 rounded border-gray-400 border mb-4"
              value={editedTaskTitle}
              onChange={(e) => setEditedTaskTitle(e.target.value)}
            />
            <button className="text-blue-500" onClick={handleSave}>
              保存
            </button>
          </>
        ) : (
          <>
            {/* <p className="mb-4">{fetchedTodo?.text}</p> */}
            <button className="text-green-500 mr-3" onClick={handleEdit}>
              編集
            </button>
            <button className="text-red-500" onClick={handleDelete}>
              削除
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
