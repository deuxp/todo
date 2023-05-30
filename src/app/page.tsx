import "./globals.css";
import Link from "next/link";
import { prisma } from "@/db";

export default async function Home() {
  const getTodos =  () => {
      return  prisma.todo.findMany();
    }

  const todos = await getTodos();

  const renderTodos = todos.map(todo => {
    return <li key={todo.id}>{todo.title}</li>
  })

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl">Todos</h1>

        <Link href="/new" className="px-2 py-1 mb-4 border rounded focus-within:bg-emerald-600 hover:bg-emerald-600 border-emerald-300">
          New
        </Link>

      </header>
    </>
  );
}
