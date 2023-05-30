import Link from "next/link";

export default function New() {
  return (
    <>
      <h1 className="text-5xl pb-7">New</h1>
      <Link href="/" className="text-lg hover:text-yellow-300">
        Home
      </Link>
    </>
  );
}
