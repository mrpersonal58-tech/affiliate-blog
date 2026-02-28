import Link from "next/link";

const articles = [
  {
    title: "Top 5 Laptops to Buy in India — 2026 Edition",
    description: "We tested 5 popular laptops from ₹44K to ₹70K and ranked them for students, professionals, and gamers.",
    href: "/blog/top-laptops-2026",
    category: "Laptops",
    date: "Feb 20, 2026",
    readTime: "8 min",
    badge: "🔥 Trending",
    badgeColor: "#ef4444",
  },
  {
    title: "Best Smartphones Under ₹25,000 — Tested & Ranked",
    description: "POCO X6 Pro, Realme GT 6T, Samsung A55 — which one should you actually buy? Our full comparison.",
    href: "/blog/smartphones-under-25000",
    category: "Smartphones",
    date: "Feb 15, 2026",
    readTime: "10 min",
    badge: "⚡ Popular",
    badgeColor: "#f97316",
  },
  {
    title: "Best Earbuds Under ₹10,000 in India",
    description: "Nothing Ear (2), boAt Nirvana Ion, Jabra Elite 4 — we compare the top TWS earbuds at every budget.",
    href: "/blog/earbuds-under-10000",
    category: "Earbuds",
    date: "Feb 10, 2026",
    readTime: "7 min",
    badge: "⭐ New",
    badgeColor: "#22c55e",
  },
  {
    title: "Best Gaming Laptops Under ₹80,000",
    description: "Acer Nitro V vs Lenovo LOQ vs ASUS TUF — our detailed gaming laptop comparison for Indian buyers.",
    href: "/blog/gaming-laptops",
    category: "Gaming",
    date: "Feb 5, 2026",
    readTime: "12 min",
    badge: "🎮 Gaming",
    badgeColor: "#8b5cf6",
  },
  {
    title: "Best Mechanical Keyboards Under ₹5,000",
    description: "You don't need to spend a fortune for a great typing experience. Our top picks for every budget.",
    href: "/blog/mechanical-keyboards",
    category: "Accessories",
    date: "Jan 28, 2026",
    readTime: "6 min",
    badge: "💰 Value",
    badgeColor: "#f97316",
  },
  {
    title: "Top 5 Budget Tablets in India 2026",
    description: "Redmi Pad SE vs Samsung Tab A9 vs Realme Pad 2 — which budget tablet is worth buying?",
    href: "/blog/budget-tablets-2026",
    category: "Tablets",
    date: "Jan 20, 2026",
    readTime: "9 min",
    badge: "📱 Tablets",
    badgeColor: "#3b82f6",
  },
];

export default function Blog() {
  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px" }}>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: "48px" }}>
        <div style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>
          All Articles
        </div>
        <h1 className="font-display" style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "12px" }}>
          Latest Reviews & Guides
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "1rem" }}>
          Honest, in-depth reviews of the best budget tech in India — updated regularly.
        </p>
      </div>

      {/* Featured (first article) */}
      <Link href={articles[0].href} style={{ textDecoration: "none" }}>
        <div className="product-card fade-up" style={{
          background: "linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(20,20,24,1) 50%)",
          border: "1px solid rgba(249,115,22,0.2)",
          borderRadius: "16px",
          padding: "36px",
          marginBottom: "28px",
        }}>
          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <span style={{ background: articles[0].badgeColor, color: "white", padding: "3px 12px", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700 }}>
              {articles[0].badge}
            </span>
            <span style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--muted)", padding: "3px 12px", borderRadius: "999px", fontSize: "0.78rem" }}>
              {articles[0].category}
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "12px", lineHeight: 1.3 }}>
            {articles[0].title}
          </h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: "20px" }}>
            {articles[0].description}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "var(--muted)", fontSize: "0.82rem" }}>{articles[0].date} · {articles[0].readTime} read</span>
            <span style={{ color: "var(--accent)", fontWeight: 600, fontSize: "0.9rem" }}>Read Article →</span>
          </div>
        </div>
      </Link>

      {/* Article grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
        {articles.slice(1).map((article, i) => (
          <Link key={article.title} href={article.href} style={{ textDecoration: "none" }}>
            <div className="product-card fade-up" style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "24px",
              height: "100%",
              animationDelay: `${i * 0.08}s`,
            }}>
              <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                <span style={{ background: article.badgeColor + "22", color: article.badgeColor, padding: "2px 10px", borderRadius: "999px", fontSize: "0.73rem", fontWeight: 700 }}>
                  {article.badge}
                </span>
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "10px", lineHeight: 1.4 }}>
                {article.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "16px" }}>
                {article.description}
              </p>
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "12px", display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "var(--muted)" }}>
                <span>{article.date}</span>
                <span>{article.readTime} read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
