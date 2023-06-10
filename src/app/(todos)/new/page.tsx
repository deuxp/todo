import Link from "next/link";

export default function New() {
  return (
    <>
      <header className="pb-5 border-b-2 border-emerald-700 mb-4 flex items-center justify-between">
        <h1 className="text-5xl">New Todo</h1>
        <Link
          href="/"
          className="px-2 py-1 border rounded focus-within:bg-emerald-600 outline-none hover:bg-emerald-600 border-emerald-300"
        >
          back
        </Link>
      </header>
    </>
  );
}
