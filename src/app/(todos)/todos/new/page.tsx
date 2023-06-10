import Link from "next/link";
import { createTodo } from "@/lib/prisma/todos";

export default function New() {
  return (
    <>
      <header className="mb-4 flex items-center justify-between border-b-2 border-emerald-700 pb-5">
        <h1 className="text-5xl">New Todo</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          className="rounded border border-emerald-300 bg-transparent px-2 py-1 outline-none focus-within:border-emerald-100"
        />
        <div className="flex justify-end gap-1">
          <Link
            href="/todos"
            className="rounded border border-emerald-300 px-2 py-1 outline-none focus-within:bg-emerald-600 hover:bg-emerald-600"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded border border-emerald-300 px-2 py-1 outline-none focus-within:bg-emerald-600 hover:bg-emerald-600"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}

// Tailwind layout be like: flex | directions | justify |gap
// also Tailwind: focus within will also let you jump to element with a tab
