import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl pb-7">Todos</h1>
        <Link href="/new" className="text-lg hover:text-yellow-300">
          New
        </Link>
      </header>
    </>
  );
}
