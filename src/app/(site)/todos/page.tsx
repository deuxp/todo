import "@/globals.css"; // import tailwind
import Link from "next/link";
import { getTodos, toggleTodo } from "../../../lib/prisma/todos";
import TodoItem from "@/components/Todo/TodoItem/page";

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="mb-4 flex items-center justify-between border-b-2 border-emerald-700 pb-5">
        <h1 className="text-5xl">Todos</h1>

        <Link
          href="/todos/new"
          className="rounded border border-emerald-300 px-2 py-1 outline-none focus-within:bg-emerald-600 hover:bg-emerald-600"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map(todo => {
          return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />;
        })}
      </ul>
    </>
  );
}
