import { getTodo } from "@/lib/prisma/todos";
import Link from "next/link";

type routeParams = {
  params: { todoId: string };
};

async function TodoView({ params }: routeParams) {
  const { todoId } = params;

  const todo = await getTodo(todoId);

  console.log({ todo });

  return (
    <div>
      <h1 className="pb-8 text-5xl">{todo?.title}</h1>
      <p>Status: {todo?.complete ? "complete" : "active"}</p>
      <Link
        className="cursor-pointer, text-sm hover:text-red-400"
        href={"/todos"}
      >
        .. back{" "}
      </Link>
    </div>
  );
}

export default TodoView;
