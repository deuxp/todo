import { redirect } from "next/navigation";
import { prisma } from "@/db";

/**
 * get all the todos
 * @date 6/9/2023 - 6:47:08 PM
 * @author Gottfried Kleinberger
 *
 * @async
 * @returns {Promise<Array>}
 */
export async function getTodos() {
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
export async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}

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
export async function createTodo(data: FormData) {
  // server action: in <form action={} />
  "use server"; // server code, never runs on the client

  // this is the `name` attribute of the input field of FormData
  const title = data.get("title")?.valueOf();

  // checking that the form data type is correct (xxs) or has value
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({ data: { title, complete: false } });

  redirect("/todos"); // import from 'next/navigation'
}
