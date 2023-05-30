import "./globals.css";

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
        className={`container font-mono bg-emerald-900 text-2xl text-slate-100 mx-auto p-7 pt-10`}
      >
        {children}
      </body>
    </html>
  );
}
