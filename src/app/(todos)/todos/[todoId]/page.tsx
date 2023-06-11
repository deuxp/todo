import { getTodo } from "@/lib/prisma/todos";
import Link from "next/link";

type routeParams = {
  params: { todoId: string };
};

type todo = {
  title: string;
  complete: boolean;
};

async function TodoView({ params }: routeParams) {
  const { todoId } = params;

  // use as any for deconstructing properties:
  // TODO: find better way to get rid of type warning
  const { complete, title } = (await getTodo(todoId)) as any;

  return (
    <div>
      <h1 className="pb-8 text-5xl">{title}</h1>
      <p className="text-blue-400">
        Status: {complete ? "complete" : "active"}
      </p>
      <Link
        className="cursor-pointer, text-sm text-teal-500 hover:text-red-400"
        href={"/todos"}
      >
        .. back{" "}
      </Link>
    </div>
  );
}

export default TodoView;
