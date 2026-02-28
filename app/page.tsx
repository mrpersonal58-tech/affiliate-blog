import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          Best Budget Tech Reviews in India
        </h1>
        <p className="text-lg text-gray-600">
          Helping students choose the best laptops, smartphones and gadgets.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Top Laptops to Buy in 2026
          </h2>
          <Link
            href="/blog/top-laptops-2026"
            className="text-blue-600 font-medium"
          >
            Read Article →
          </Link>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3">
            Best Smartphones Under ₹25,000
          </h2>
          <Link
            href="/blog/smartphones-under-25000"
            className="text-blue-600 font-medium"
          >
            Read Article →
          </Link>
        </div>
      </section>

    </div>
  );
}