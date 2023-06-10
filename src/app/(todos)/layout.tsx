import "../globals.css";

export const metadata = {
  title: "todo slicer",
  description: "chops an prepares",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto bg-emerald-900 p-7 pt-10 font-mono text-2xl text-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}
