import Link from "next/link";

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>

      <ul className="space-y-6">
        <li>
          <Link href="/blog/top-laptops-2026" className="text-xl text-blue-600">
            Top Laptops to Buy in 2026
          </Link>
        </li>

        <li>
          <Link
            href="/blog/smartphones-under-25000"
            className="text-xl text-blue-600"
          >
            Best Smartphones Under ₹25,000
          </Link>
        </li>
      </ul>
    </div>
  );
}