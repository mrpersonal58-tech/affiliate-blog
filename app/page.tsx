export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-10">
      <h1 className="text-4xl font-bold mb-6">
        Smart Student Gadgets
      </h1>

      <p className="text-lg mb-4">
        Best budget tech reviews for students in India.
      </p>

      <div className="mt-8">
        <a
          href="/blog/best-earbuds-under-2000"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Read Latest Article
        </a>
      </div>
    </main>
  );
}