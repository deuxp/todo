import "./globals.css";
import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "./components/TodoItem/page";

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="pb-5 border-b-2 border-emerald-700 mb-4 flex items-center justify-between">
        <h1 className="text-5xl">Todos</h1>

        <Link
          href="/new"
          className="px-2 py-1 border rounded focus-within:bg-emerald-600 outline-none hover:bg-emerald-600 border-emerald-300"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </>
  );
}

/**
 * get all the todos
 * @date 6/9/2023 - 6:47:08 PM
 * @author Gottfried Kleinberger
 *
 * @async
 * @returns {Promise<Array>}
 */
async function getTodos() {
  return await prisma.todo.findMany();
}
