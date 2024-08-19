import Link from "next/link";
import AddTask from "../components/AddTask";
// import TodoList from '../components/TodoList'
import { getAllTodos } from "@/api";

export default async function Home() {
  const todos = await getAllTodos();
  return (
    <>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl mb-5">
            <Link href="/">トップページに戻る</Link>
          </h1>
          <AddTask />
          {/* <TodoList todos={todos} /> */}
        </div>
      </div>
    </>
  );
}
