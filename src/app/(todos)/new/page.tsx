import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

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
            href="/"
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

// Tailwind be like: flex | directions | justify |gap
// also Tailwind: focus within will also let you jump to element with a tab

/**
 * Create a todo and insert it into the db.
 * Note: this is an experimental server action.
 * @date 6/9/2023 - 9:39:34 PM
 * @author Gottfried Kleinberger
 *
 * @requires module:next/navigation.redirect
 * @requires module:@/db.prisma
 * @async
 * @param {FormData} data form data interface. Exposes getter function -> data.get('name')?.valueOf()
 * @returns {undefined}
 * @example <caption>ie.,</caption>
 * <form action={func_goes_here}>
 *   <input type="text" name="used_in_data.get(NAME)?.valueOf()"/>
 * </form>
 */
async function createTodo(data: FormData) {
  // server action: in <form action={} />
  "use server"; // server code, never runs on the client

  // this is the `name` attribute of the input field of FormData
  const title = data.get("title")?.valueOf();

  // checking that the form data type is correct (xxs) or has value
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/"); // import from 'next/navigation'
}
