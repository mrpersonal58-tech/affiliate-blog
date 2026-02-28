import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Budget Tech India",
  description: "Best budget tech reviews in India for students.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">Budget Tech India</Link>
          </h1>

          <div className="space-x-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        {/* Page Content */}
        <main className="min-h-screen p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-black text-white text-center py-6 mt-10">
          <p>© 2026 Budget Tech India. All Rights Reserved.</p>
          <p className="text-sm mt-2">
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </footer>

      </body>
    </html>
  );
}