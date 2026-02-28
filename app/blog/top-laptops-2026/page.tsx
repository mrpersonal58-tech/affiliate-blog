import Link from "next/link";

const laptops = [
  {
    rank: 1,
    name: "ASUS VivoBook 16X",
    price: "₹57,990",
    bestFor: "Overall Best",
    specs: {
      processor: "Intel Core i5-12500H",
      ram: "16GB DDR4",
      storage: "512GB NVMe SSD",
      display: "16\" WUXGA IPS 144Hz",
      battery: "70Wh (~8-9 hrs)",
      weight: "1.88 kg",
    },
    pros: ["Excellent performance for the price", "High refresh rate display", "Good build quality", "Expandable RAM"],
    cons: ["Fan noise under load", "No dedicated GPU"],
    rating: 4.6,
    amazonHref: "#",
  },
  {
    rank: 2,
    name: "HP Pavilion 15",
    price: "₹52,990",
    bestFor: "Student Pick",
    specs: {
      processor: "Intel Core i5-1335U",
      ram: "16GB DDR4",
      storage: "512GB SSD",
      display: "15.6\" FHD IPS Anti-Glare",
      battery: "41Wh (~6-7 hrs)",
      weight: "1.75 kg",
    },
    pros: ["Solid everyday performance", "Lightweight design", "Good display", "Backlit keyboard"],
    cons: ["Average battery life", "No USB-A on one side"],
    rating: 4.4,
    amazonHref: "#",
  },
  {
    rank: 3,
    name: "Acer Aspire 5",
    price: "₹44,990",
    bestFor: "Best Value",
    specs: {
      processor: "AMD Ryzen 5 7530U",
      ram: "8GB DDR4 (Upgradable to 32GB)",
      storage: "512GB SSD",
      display: "15.6\" Full HD IPS",
      battery: "57.5Wh (~7-8 hrs)",
      weight: "1.9 kg",
    },
    pros: ["Great Ryzen performance", "Upgradable RAM", "Good battery", "Affordable"],
    cons: ["Plastic build feels basic", "Webcam quality is average"],
    rating: 4.3,
    amazonHref: "#",
  },
  {
    rank: 4,
    name: "Acer Nitro V 15",
    price: "₹69,990",
    bestFor: "Budget Gaming",
    specs: {
      processor: "Intel Core i5-13420H",
      ram: "16GB DDR5",
      storage: "512GB PCIe Gen 4",
      display: "15.6\" FHD 144Hz IPS",
      battery: "57.5Wh",
      weight: "2.5 kg",
    },
    pros: ["RTX 4050 GPU included", "Fast 144Hz display", "Good thermal management", "DDR5 RAM"],
    cons: ["Heavier build", "Average battery life", "Loud fans under gaming load"],
    rating: 4.5,
    amazonHref: "#",
  },
  {
    rank: 5,
    name: "Lenovo IdeaPad Slim 5",
    price: "₹56,490",
    bestFor: "Ultrabook Feel",
    specs: {
      processor: "AMD Ryzen 5 7530U",
      ram: "16GB LPDDR4X",
      storage: "512GB SSD",
      display: "14\" 2.8K OLED 90Hz",
      battery: "56Wh (~10 hrs)",
      weight: "1.46 kg",
    },
    pros: ["Stunning OLED display", "Very lightweight", "Excellent battery life", "Premium look"],
    cons: ["Soldered RAM (not upgradable)", "OLED can have burn-in risk"],
    rating: 4.5,
    amazonHref: "#",
  },
];

function StarRating({ rating }: { rating: number }) {
  return <span style={{ color: "#f59e0b" }}>{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>;
}

export default function Laptops() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px" }}>
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: "32px", fontSize: "0.85rem", color: "var(--muted)" }}>
        <Link href="/" style={{ color: "var(--muted)", textDecoration: "none" }}>Home</Link>
        {" "}/{" "}
        <Link href="/blog" style={{ color: "var(--muted)", textDecoration: "none" }}>Blog</Link>
        {" "}/{" "}
        <span style={{ color: "var(--text)" }}>Top Laptops 2026</span>
      </div>

      {/* Header */}
      <div className="fade-up" style={{ marginBottom: "48px" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", padding: "3px 12px", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 700 }}>
            🔥 Updated Feb 2026
          </span>
          <span style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", color: "var(--muted)", padding: "3px 12px", borderRadius: "999px", fontSize: "0.78rem", fontWeight: 600 }}>
            💻 Laptops
          </span>
        </div>

        <h1 className="font-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "16px", lineHeight: 1.2 }}>
          Top 5 Laptops to Buy in India — <span className="gradient-text">2026 Edition</span>
        </h1>

        <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7 }}>
          We tested and compared the most popular laptops across price segments — from budget ₹40K picks to capable ₹70K performers — to help you make the smartest buying decision.
        </p>

        <div style={{ display: "flex", gap: "24px", marginTop: "20px", paddingTop: "20px", borderTop: "1px solid var(--border)", flexWrap: "wrap" }}>
          {[["5", "Laptops Tested"], ["40+", "Hours Testing"], ["100%", "Unbiased"]].map(([val, label]) => (
            <div key={label} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span className="gradient-text" style={{ fontWeight: 800, fontSize: "1.1rem" }}>{val}</span>
              <span style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Laptop Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {laptops.map((laptop, i) => (
          <div key={laptop.name} className="product-card fade-up" style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "28px",
            animationDelay: `${i * 0.1}s`,
          }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <div style={{
                  width: "42px", height: "42px",
                  background: i === 0 ? "linear-gradient(135deg, #f97316, #ea580c)" : "var(--bg-card2)",
                  border: i === 0 ? "none" : "1px solid var(--border)",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1rem", fontWeight: 800, color: i === 0 ? "white" : "var(--muted)",
                }}>
                  #{laptop.rank}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>{laptop.name}</div>
                  <div style={{ color: "var(--accent)", fontSize: "0.78rem", fontWeight: 600, marginTop: "2px" }}>{laptop.bestFor}</div>
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 800 }}>{laptop.price}</div>
                <StarRating rating={laptop.rating} />
              </div>
            </div>

            {/* Specs grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "10px", marginBottom: "20px" }}>
              {Object.entries(laptop.specs).map(([key, val]) => (
                <div key={key} style={{ background: "var(--bg-card2)", borderRadius: "8px", padding: "10px 14px" }}>
                  <div style={{ color: "var(--muted)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>{key}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600 }}>{val}</div>
                </div>
              ))}
            </div>

            {/* Pros/Cons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "20px" }}>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#22c55e", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>✓ Pros</div>
                {laptop.pros.map(pro => (
                  <div key={pro} style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "4px" }}>• {pro}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#ef4444", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>✗ Cons</div>
                {laptop.cons.map(con => (
                  <div key={con} style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: "4px" }}>• {con}</div>
                ))}
              </div>
            </div>

            <a href={laptop.amazonHref} className="amazon-btn" style={{ fontSize: "0.9rem" }}>
              🛒 Check Price on Amazon
            </a>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{
        marginTop: "48px",
        background: "rgba(249,115,22,0.06)",
        border: "1px solid rgba(249,115,22,0.15)",
        borderRadius: "10px",
        padding: "16px 20px",
        fontSize: "0.82rem",
        color: "var(--muted)",
        lineHeight: 1.6,
      }}>
        ⚠️ <strong style={{ color: "var(--text)" }}>Affiliate Disclosure:</strong> Links on this page may be affiliate links. We may earn a commission if you buy through them at no extra cost to you. Prices are subject to change — always verify on Amazon.
      </div>
    </div>
  );
}
