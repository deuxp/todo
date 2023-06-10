import "../globals.css"; // import tailwind
import Link from "next/link";
import { prisma } from "@/db";
import TodoItem from "../components/TodoItem/page";

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className="mb-4 flex items-center justify-between border-b-2 border-emerald-700 pb-5">
        <h1 className="text-5xl">Todos</h1>

        <Link
          href="/new"
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

/**
 * Persist the checked box status. Caveat: when you pass a server function around by reference,
 * you cannot call any redirects from within the function.
 * @date 6/9/2023 - 11:34:07 PM
 * @author Gottfried Kleinberger
 *
 * @requires @/db.prisma.todo.findUnique
 * @async prisma needs to await
 * @param {string} id
 * @param {boolean} complete
 * @returns {undefined}
 */
async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}
