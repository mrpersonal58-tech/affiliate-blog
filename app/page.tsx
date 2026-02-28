import Link from "next/link";

const trendingProducts = [
  {
    name: "POCO X6 Pro 5G",
    category: "Smartphone",
    price: "₹22,999",
    badge: "🔥 HOT",
    badgeType: "hot",
    specs: ["Dimensity 8300-Ultra", "AMOLED 144Hz", "67W Fast Charge"],
    rating: 4.5,
    votes: 2841,
    href: "/blog/smartphones-under-25000",
    tag: "Best Seller",
  },
  {
    name: "Realme GT 6T",
    category: "Smartphone",
    price: "₹24,999",
    badge: "⚡ NEW",
    badgeType: "new",
    specs: ["Snapdragon 7+ Gen 3", "120Hz SuperAMOLED", "5500mAh Battery"],
    rating: 4.4,
    votes: 1923,
    href: "/blog/smartphones-under-25000",
    tag: "Gaming Pick",
  },
  {
    name: "iQOO Z9x 5G",
    category: "Smartphone",
    price: "₹14,999",
    badge: "💰 VALUE",
    badgeType: "deal",
    specs: ["Snapdragon 6 Gen 1", "6000mAh Battery", "120Hz Display"],
    rating: 4.3,
    votes: 3102,
    href: "/blog/smartphones-under-25000",
    tag: "Budget King",
  },
  {
    name: "HP Pavilion 15",
    category: "Laptop",
    price: "₹52,990",
    badge: "🔥 HOT",
    badgeType: "hot",
    specs: ["Intel Core i5-1335U", "16GB RAM", "512GB SSD"],
    rating: 4.4,
    votes: 1567,
    href: "/blog/top-laptops-2026",
    tag: "Student Pick",
  },
  {
    name: "Acer Aspire 5",
    category: "Laptop",
    price: "₹44,990",
    badge: "💰 DEAL",
    badgeType: "deal",
    specs: ["AMD Ryzen 5 7530U", "8GB RAM (Upgradable)", "Full HD IPS"],
    rating: 4.2,
    votes: 2189,
    href: "/blog/top-laptops-2026",
    tag: "Best Value",
  },
  {
    name: "Nothing Ear (2)",
    category: "Earbuds",
    price: "₹7,999",
    badge: "⚡ TRENDING",
    badgeType: "new",
    specs: ["High-Res Audio", "ANC + Transparency", "36h Total Battery"],
    rating: 4.5,
    votes: 4201,
    href: "/blog/earbuds-under-10000",
    tag: "Editor's Choice",
  },
];

const categories = [
  { name: "Laptops", icon: "💻", count: 24, href: "/blog/top-laptops-2026" },
  { name: "Smartphones", icon: "📱", count: 38, href: "/blog/smartphones-under-25000" },
  { name: "Earbuds", icon: "🎧", count: 19, href: "/blog" },
  { name: "Gaming", icon: "🎮", count: 15, href: "/blog" },
  { name: "Accessories", icon: "🖱️", count: 31, href: "/blog" },
  { name: "Tablets", icon: "📟", count: 12, href: "/blog" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span style={{ color: "#f59e0b", fontSize: "0.85rem" }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

function BadgeColor(type: string) {
  if (type === "hot") return { background: "#ef4444", color: "white" };
  if (type === "new") return { background: "#22c55e", color: "white" };
  return { background: "var(--accent)", color: "white" };
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px 60px",
        textAlign: "center",
      }} className="fade-up">
        <div style={{
          display: "inline-block",
          background: "rgba(249,115,22,0.12)",
          border: "1px solid rgba(249,115,22,0.3)",
          borderRadius: "999px",
          padding: "5px 16px",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--accent)",
          marginBottom: "20px",
          letterSpacing: "0.05em",
        }}>
          🇮🇳 INDIA&apos;S TRUSTED BUDGET TECH GUIDE
        </div>

        <h1 className="font-display" style={{
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: "20px",
        }}>
          Find the{" "}
          <span className="gradient-text">Best Tech</span>
          <br />Without Breaking the Bank
        </h1>

        <p style={{ color: "var(--muted)", fontSize: "1.1rem", maxWidth: "560px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          Curated reviews, trending picks, and real-world comparisons — made for Indian students and professionals.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/blog/top-laptops-2026" className="amazon-btn" style={{ fontSize: "0.95rem" }}>
            💻 Best Laptops 2026
          </Link>
          <Link href="/blog/smartphones-under-25000" style={{
            border: "1px solid var(--border)",
            color: "var(--text)",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "border-color 0.2s",
          }}>
            📱 Top Smartphones
          </Link>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "40px", justifyContent: "center", marginTop: "60px", flexWrap: "wrap" }}>
          {[["500+", "Products Reviewed"], ["2M+", "Monthly Readers"], ["4.8★", "Trust Rating"]].map(([val, label]) => (
            <div key={label}>
              <div className="gradient-text font-display" style={{ fontSize: "2rem", fontWeight: 800 }}>{val}</div>
              <div style={{ color: "var(--muted)", fontSize: "0.8rem", marginTop: "4px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category pills */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "24px 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", gap: "12px", overflowX: "auto", paddingBottom: "4px" }}>
            {categories.map((cat) => (
              <Link key={cat.name} href={cat.href} style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "8px 18px",
                textDecoration: "none",
                color: "var(--text)",
                fontSize: "0.9rem",
                fontWeight: 500,
                whiteSpace: "nowrap",
                transition: "border-color 0.2s, background 0.2s",
              }}>
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span style={{ background: "var(--border)", borderRadius: "999px", padding: "1px 8px", fontSize: "0.75rem", color: "var(--muted)" }}>
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Grid */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px" }}>
          <div>
            <div style={{ color: "var(--accent)", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
              What&apos;s Hot Right Now
            </div>
            <h2 className="font-display" style={{ fontSize: "2rem", fontWeight: 800 }}>Trending Picks</h2>
          </div>
          <Link href="/blog" style={{ color: "var(--muted)", fontSize: "0.9rem", textDecoration: "none", fontWeight: 500 }}>
            View All →
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}>
          {trendingProducts.map((product, i) => (
            <Link key={product.name} href={product.href} style={{ textDecoration: "none" }}>
              <div className="product-card" style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "24px",
                cursor: "pointer",
                animationDelay: `${i * 0.08}s`,
              }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span style={{
                    ...BadgeColor(product.badgeType),
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "999px",
                    letterSpacing: "0.04em",
                  }}>
                    {product.badge}
                  </span>
                  <span style={{
                    background: "rgba(249,115,22,0.1)",
                    color: "var(--accent)",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "999px",
                  }}>
                    {product.tag}
                  </span>
                </div>

                {/* Category */}
                <div style={{ color: "var(--muted)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                  {product.category}
                </div>

                {/* Name */}
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "14px", lineHeight: 1.3 }}>
                  {product.name}
                </h3>

                {/* Specs */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px", display: "flex", flexDirection: "column", gap: "5px" }}>
                  {product.specs.map(spec => (
                    <li key={spec} style={{ color: "var(--muted)", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: "#22c55e", fontSize: "0.7rem" }}>✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Rating + price */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
                  <div>
                    <StarRating rating={product.rating} />
                    <div style={{ color: "var(--muted)", fontSize: "0.72rem", marginTop: "2px" }}>
                      {product.votes.toLocaleString()} votes
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)" }}>{product.price}</div>
                    <div style={{ color: "var(--accent)", fontSize: "0.78rem", fontWeight: 600 }}>Check Price →</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        margin: "0 auto 80px",
        maxWidth: "1100px",
        padding: "0 24px",
      }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(59,130,246,0.1) 100%)",
          border: "1px solid rgba(249,115,22,0.25)",
          borderRadius: "20px",
          padding: "48px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}>
          <div>
            <h3 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "10px" }}>
              Never Miss a Deal
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "1rem" }}>
              Get weekly roundups of the best budget tech in India.
            </p>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                background: "var(--bg-card2)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "10px 16px",
                color: "var(--text)",
                fontSize: "0.9rem",
                outline: "none",
                width: "220px",
              }}
            />
            <button className="amazon-btn" style={{ border: "none", cursor: "pointer" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
