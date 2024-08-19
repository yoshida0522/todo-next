import Link from "next/link";
import { getAllTodos } from "@/api";
import ListData from "../components/ListData";

export default async function Home() {
  const todos = await getAllTodos();

  const handleClick = () => {
    console.log(todos);
  };

  return (
    <>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl mb-5">
            <Link href="/">トップページに戻る</Link>
          </h1>
          <ListData onClick={handleClick} todos={todos} />
        </div>
      </div>
    </>
  );
}
