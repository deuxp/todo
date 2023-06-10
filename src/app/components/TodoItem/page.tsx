import React from "react";

type todoItemProps = {
  children: React.ReactNode;
  id: string;
  title: string;
  complete: boolean;
};

function TodoItem({ children, id, title, complete }: todoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input type="checkbox" id={id} className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="peer-checked:text-emerald-950 cursor-pointer peer-checked:line-through"
      >
        {title}
      </label>
    </li>
  );
}

export default TodoItem;
