// we are using client here because this component uses an event handler
// client side render
// there is client interaction although no reactiveness is occuring in here
// Note: by default all the pages are server components
// you must declare when a component is reactive or has any kind of listeners

"use client";
import React from "react";

type todoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  // return void if you don't care what the output is to be (undefined)
  toggleTodo: (id: string, complete: boolean) => void;
};

function TodoItem({ id, title, complete, toggleTodo }: todoItemProps) {
  return (
    <li className="flex items-center gap-1">
      <input
        type="checkbox"
        id={id}
        className="peer cursor-pointer"
        defaultChecked={complete}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:text-emerald-950 peer-checked:line-through"
      >
        {title}
      </label>
    </li>
  );
}

export default TodoItem;
